import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ImageForm = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [title, setTitle] = useState('');
  const [loadedProgress, setLoadedProgress] =
    useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async function (e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    formData.append('title', title);
    setLoading(true);
    await axios.post(
      `${process.env.REACT_APP_API_END_POINT}/api/images/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress(progressEvent) {
          const { total, loaded } = progressEvent;
          const loadedPercentage = parseInt(
            (loaded * 100) / total
          );
          setLoadedProgress(loadedPercentage);
        },
      }
    );
    setLoading(false);
    navigate(`/image-gallery/`);
  };

  return (
    <div className='col-md-4 offset-md-4 '>
      {loading && (
        <div className='progress rounded-0'>
          <div
            className='progress-bar bg-primary'
            role='progressbar'
            style={{
              width: `${loadedProgress}%`,
            }}
          ></div>
        </div>
      )}

      <div className='card bg-dark text-light rounded-0 p-4'>
        <div className='card-body'>
          <h3>Upload an Image</h3>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              placeholder='Introduce image title'
              className='form-control bg-dark text-light my-3 rounded-0'
            />
            <input
              type='file'
              onChange={(e) =>
                setFile(e.target.files.item(0))
              }
              className='form-control bg-dark text-light my-3 rounded-0'
            />
            <div className='my-3'>
              <button
                className='btn btn-success rounded-0 w-100'
                type='submit'
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
