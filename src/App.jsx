import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImageGallery } from './pages/ImageGallery';
import { ImageForm } from './pages/ImageForm';
import { ImageDetail } from './pages/ImageDetail';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="text-dark">
      <NavBar />
      <div className="container p-4">
        <Routes>
          <Route path={'/'} element={<ImageGallery />} index></Route>
          <Route path={'/create-image'} element={<ImageForm />}></Route>
          <Route path={'/detail/:id'} element={<ImageDetail />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
