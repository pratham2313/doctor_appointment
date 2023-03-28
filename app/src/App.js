import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Doctorreg from './pages/doctorreg';
import Patientreg from './pages/patientreg';
import Appointmentbooking from './pages/appointmentbooking';
import Index from './pages/Index';
import Patientlogin from './pages/Patientlogin';
import Main from './dashboard/main';
import Card_doc from './pages/Card_doc';
import DateTimePicker from './pages/DateTimePicker';
import PatientDashboard from './dashboard/Patient/patientDashboard';
import Call from './pages/VideoCall';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/datetimepicker" element={<DateTimePicker />} />
          <Route path="/docreg" element={<Doctorreg />} />
          <Route path="/patientreg" element={<Patientreg />} />
          <Route path='/appointment' element={<Appointmentbooking />} />
          <Route path='/index' element={<Index />} />
          <Route path='/patientlogin' element={<Patientlogin />} />
          <Route path='/dashmain' element={<Main />} />
          <Route path='/card' element={<Card_doc />} />
          <Route path='/patientdashboard' element={<PatientDashboard />} />
          <Route path='/VideoCall' element={<Call />} />
          {/* <Route path='http://localhost:5000/'/> */}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
