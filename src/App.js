import React from 'react'
import {BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import Header from './pages/components/Header';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import PrivateRoute from './pages/components/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import CreateListing from './pages/CreateListing';
import EditListing from './pages/EditListing';
import Listing from './pages/Listing';
import Caregory from './pages/Caregory';


const App = () => {
    return ( 
    <>
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<PrivateRoute/>}>
                <Route path='/profile' element={<Profile/>}/>
            </Route>
            <Route path='/sing-in' element={<Signin/>}/>
            <Route path='/sing-Up' element={<SignUp/>}/>
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/caregory/:caregoryName/:listingId' element={<Listing/>}/>
            <Route path='/offers' element={<Offers/>}/>
            <Route path='/caregory/:caregoryName' element={<Caregory/>}/>
            <Route path='/create-listing' element={<PrivateRoute/>}>
              <Route path='/create-listing' element={<CreateListing/>}/>
            </Route>
            <Route path='/edit-listing' element={<PrivateRoute/>}>
              <Route path='/edit-listing/:listingId' element={<EditListing/>}/>
            </Route>      
        </Routes>
    </Router>
    <ToastContainer
     position="bottom-center"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="dark"
     />
    </> );
}
 
export default App;