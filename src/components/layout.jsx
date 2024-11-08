
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';

import HomePage from '../pages/home_page';
import Test from '../pages/Test';
import Diagnostico from '../pages/Diagnostico';
import Login from '../pages/Login';
import Sign_Up from '../pages/Sign_Up';
import Revision from '../pages/Admin';
import SurveyComponent from './SurveyComponent';
import SurveyHappiness from './SurveyHappiness';

import NavBar from '../components/nav_bar';
import ProtectedRoute from '../components/ProtectedRoute';


const App = () => {
  const location = useLocation();
  const hideNavBar = location.pathname === '/Login' || location.pathname === '/Sign_Up';

  return (
    <div className='layout'>
      {!hideNavBar && <NavBar />}
      <div className='layout__page'>
        <Routes>
          <Route path="/Happiness" element={<SurveyHappiness />} /> 
          <Route path="/spotify" element={<SurveyComponent />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/Diagnostico' element={<ProtectedRoute element={<Diagnostico />} />} />
          <Route path='/Test' element={<ProtectedRoute element={<Test />} />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Sign_Up' element={<Sign_Up />} />
          <Route path='/Revisar' element={<Revision />} />
        </Routes>
      </div>
    </div>
  );
};

const Layout = () => (
  <AuthProvider>
    <BrowserRouter>
      <div className="background"> 
        <App />
      </div>
    </BrowserRouter>
  </AuthProvider>
);

export default Layout;
