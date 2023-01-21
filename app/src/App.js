import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Doctorreg from './pages/doctorreg';
import Patientreg from './pages/patientreg';
import Appointmentbooking from './pages/appointmentbooking';
import Index from './pages/Index';




function App() {
  console.log("i am app");
  return (

    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docreg" element={<Doctorreg />} />
          <Route path="/patientreg" element={<Patientreg />} />
          <Route path='/appointment' element={<Appointmentbooking />} />
          <Route path='/index' element={<Index />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
