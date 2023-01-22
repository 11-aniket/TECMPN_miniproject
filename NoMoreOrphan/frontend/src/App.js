import './App.css';
import {BrowserRouter as Router ,Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home';
import SignIn  from './components/Pages/SignIn';
import SignUp from './components/Pages/SignUp';
import Orphan_Details from './components/Admin/ChildInfo';
import News_letter from './components/Admin/Newsletter';
import ContactUs from './components/Pages/ContactUs';
import AboutUs from './components/Pages/AboutUs';
import Missions from './components/Admin/Missions';
import Feedback from './components/Admin/Feedback';
import PhotoGallery from './components/Admin/PhotoGallery';

function App() {
  return (
   <> 
    <Routes>
      <Route path = "/" element={<Home/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="/aboutus" element={<AboutUs/>} />
      {/* Admin pages */}
      <Route path="/childgallery" element={<Orphan_Details/>} />
      <Route path="/newsletter" element={<News_letter/>} />
      <Route path="/missions" element={<Missions/>} />
      <Route path="/feedback" element={<Feedback/>} />
      <Route path="/photogallery" element={<PhotoGallery/>} />
    </Routes>
   </>
  );
}

export default App;
