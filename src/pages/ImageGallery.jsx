import axios from 'axios';
import React, {
  useEffect,
  useState,
} from 'react';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';

export const ImageGallery = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  useEffect(async () => {
    getData();
  }, []);

  async function getData() {
    const images = await axios.get(
      `${process.env.REACT_APP_API_END_POINT}/api/images`
    );
    setImages(images.data);
  }
  return (
    <div className='row'>
      {images?.map(
        ({ image_url, title, _id }, index) => (
          <div
            key={index}
            onClick={(e) =>
              navigate(`/detail/${_id}`)
            }
            className='col-md-4 p-1 card-image'
          >
            <img
              className='img-fluid h-100 w-100'
              alt={title}
              src={image_url}
            />
          </div>
        )
      )}
    </div>
  );
};
