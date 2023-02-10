import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home';
import SignIn  from './components/Pages/SignIn';
import SignUp from './components/Pages/SignUp';
import Donate from './components/Pages/Donate';
import OrphanDetails from './components/Admin/Orphans/ChildInfo';
import Newsletter from './components/Admin/Newsletter';
import AddNewsletter from './components/Admin/AddNewsletter';
import ContactUs from './components/Pages/ContactUs';
import AboutUs from './components/Pages/AboutUs';
import Missions from './components/Admin/Missions';
import AddMission from './components/Admin/AddMission';
import Feedback from './components/Admin/Feedback';
import PhotoGallery from './components/Admin/PhotoGallery';
import AddPhotoGallery from './components/Admin/AddPhotoGallery';
import Doctor_Details from './components/Admin/Doctors/DoctorInfo';
import Parentt_Details from './components/Admin/Parents/ParentInfo';
import OrphanUMe from './components/Doctor_Login/OrphanUMe'
import DrProfile from './components/Doctor_Login/DrProfile';
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
      <Route path="/admin" element={<OrphanDetails/>} />
      <Route path="/newsletter" element={<Newsletter/>} />
      <Route path="/addnewsletter" element={<AddNewsletter/>} />
      <Route path="/missions" element={<Missions/>} />
      <Route path='/addmissions' element={<AddMission />} />
      <Route path="/feedback" element={<Feedback/>} />
      <Route path="/photogallery" element={<PhotoGallery/>} />
      <Route path='/addPhotoGallery' element={<AddPhotoGallery/>} />
      <Route path="/doctors" element={<Doctor_Details/>} />
      <Route path="/parent_details" element={<Parentt_Details/>} />
      
      {/* Doctor pages */}
      <Route path='/drhome' element={< DrProfile />} />
      <Route path='/orphanUMe' element={<OrphanUMe />} />
    

      {/* Parent pages */}
      <Route path='/p_profile' element={< Parent_Profile/>} />
    </Routes>
   </>
  );
}

export default App;
