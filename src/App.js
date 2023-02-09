import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home';
import SignIn  from './components/Pages/SignIn';
import SignUp from './components/Pages/SignUp';
import Donate from './components/Pages/Donate';
import OrphanDetails from './components/Admin/Orphans/ChildInfo';
import Newsletter from './components/Admin/Newsletter';
import ContactUs from './components/Pages/ContactUs';
import AboutUs from './components/Pages/AboutUs';
import Missions from './components/Admin/Missions';
import Feedback from './components/Admin/Feedback';
import PhotoGallery from './components/Admin/PhotoGallery';
import Doctor_Details from './components/Admin/Doctors/DoctorInfo';
import Parentt_Details from './components/Admin/Parents/ParentInfo';
import DrNavbar from './components/Doctor_Login/DrNavbar';
import Profile from './components/Doctor_Login/Profile';
import Parent_Profile from './components/Parent_Login/Parent_Profile';

function App() {
  return (
   <> 
    <Routes>
      <Route path = "/" element={<Home/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/donate" element={< Donate/>} />
      {/* Admin pages */}
      <Route path="/childgallery" element={<OrphanDetails/>} />
      <Route path="/newsletter" element={<Newsletter/>} />
      <Route path="/missions" element={<Missions/>} />
      <Route path="/feedback" element={<Feedback/>} />
      <Route path="/photogallery" element={<PhotoGallery/>} />
      <Route path="/doctors" element={<Doctor_Details/>} />
      <Route path="/parent_details" element={<Parentt_Details/>} />
      
      {/* Doctor pages */}
      <Route path='/drhome' element={< DrNavbar />} />
      <Route path='/drprofile' element={< Profile />} />
    

      {/* Parent pages */}
      <Route path='/p_profile' element={< Parent_Profile/>} />
    </Routes>
   </>
  );
}

export default App;
