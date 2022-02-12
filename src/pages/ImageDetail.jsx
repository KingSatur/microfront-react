import axios from 'axios';
import React, {
  useEffect,
  useState,
} from 'react';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';

export const ImageDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [image, setImage] = useState({
    title: '',
    image_url: '',
  });

  useEffect(async () => {
    getData();
  }, []);

  async function getData() {
    const image = await axios.get(
      `${process.env.REACT_APP_API_END_POINT}/api/images/${id}`
    );
    setImage(image.data);
  }

  const handleDelete = async function () {
    const deleteResp = await axios.delete(
      `${process.env.REACT_APP_API_END_POINT}/api/images/${id}`
    );
    navigate(`/image-gallery/`);
  };

  return (
    <div className='row'>
      <div className='col-md-4 offset-md-4'>
        <div className='card bg-dark'>
          <img
            src={image.image_url}
            className='card-img-top'
            alt=''
          />
          <div className='card-body'>
            <h1 className='text-light'>
              {image?.title}
            </h1>
            <button
              onClick={handleDelete}
              className='btn btn-outline-danger'
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
