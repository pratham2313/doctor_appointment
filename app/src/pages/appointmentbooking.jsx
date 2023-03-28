
import React, { Component } from 'react';
import { useState, useEffect } from "react";
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';


//pehela pehela pyar he.....

function Appointmentbooking() {
  const navigate = useNavigate();
  const location = useLocation();
  //var data=location.state.slotinfo;
  const [data, setdata] = useState(location.state.slotinfo);
  // const [docmail, setdoc] = useState({ email: location.state.docmail });
  // const [docandpatientappointementdetails, setdetails] = useState(location.state.slotinfo);
  const [docandpatientappointementdetails, setdetails] = useState({ date: data.date, email: data.email, slot1: data.slot1, slot2: data.slot2, slot3: data.slot3, slot4: data.slot4, docname: data.docname, slot: data.slot, patientname: "", patientemail: "", phonenumber: "", gender: "" });
  const [docinfo, setdocinfo] = useState(location.state.docinfo);

  useEffect(() => {
    const fetchdoctor = async () => {

    };
    fetchdoctor();

  }, []);

  // const [appodetails, setdetails] = useState({
  //   specialist: "", docname: "", username: "", email: "", phonenumber: "", gender: "", date: "", time: ""
  // })

  // const { specialist, docname, username, email, phonenumber, gender, date, time } = appodetails;


  const handleInput = (e) => {
    // setdetails(location.state.slotinfo);
    setdetails({ ...docandpatientappointementdetails, [e.target.name]: e.target.value });
  }

  const submit = async e => {


    if (docandpatientappointementdetails.patientname == "" || docandpatientappointementdetails.patientemail == "" || docandpatientappointementdetails.phonenumber == "" || docandpatientappointementdetails.gender == "") {
      //e.preventDefault();
      //toast.error("Fill Gender feild");
    }
    else {
      e.preventDefault();

      await axios.post("http://localhost:8080/addappoinfo", docandpatientappointementdetails).then((res) => {
        if (res.data.message === "error") {
          //console.log(res.data.docinfo);
          // navigate("/card", { state: { docinfo: res.data.docinfo } });
          toast.error("Someting Went Wrong");
        }
        else if (res.data.message === "done") {
          toast.success("Appointment request has sent to your selected doctor");
          toast.info("keep checking your profile");
        }

      });
    }


  }





  return (

    <div  >
      <Header />
      <div class="container-fluid bg-primary bg-appointment mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ marginTop: "50px" }} >
        <div class="container">
          <div class="row gx-5">
            <div class="col-lg-6 py-5">
              <div class="py-5">
                <h1 class="display-5 text-black mb-4">We Are A Certified!! You Can Trust</h1>
                <h4 class="text-black mb-0">Dr Name : Dr.{docinfo[0].fullname}</h4>
                <h4 class="text-black mb-0">Dr Speciality : {docinfo[0].specialty}</h4>
                <h4 class="text-black mb-0">Dr Email : {docinfo[0].email}</h4>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                <h1 class="text-black mb-4" style={{ color: "black" }}>Make Appointment</h1>
                <form>
                  <div class="row g-3">



                    {/* <div class="col-12 col-sm-6">
                      <input id="placeholdercolor" class="form-control bg-light border-0" disabled style={{ height: "55px" }}></input>
                    </div> */}
                    <div class="col-12 col-sm-6">
                      <input name="patientname" onChange={e => handleInput(e)} type="text" class="form-control bg-light border-0" placeholder="Your Name" style={{ height: "55px" }} required />
                    </div>
                    <div class="col-12 col-sm-6">
                      <input name="patientemail" onChange={e => handleInput(e)} type="email" class="form-control bg-light border-0" placeholder="Your Email" style={{ height: "55px" }} required />
                    </div>
                    <div class="col-12 col-sm-6">
                      <input name="phonenumber" onChange={e => handleInput(e)} type="text" class="form-control bg-light border-0" placeholder="Phone Number" style={{ height: "55px" }} required />
                    </div>
                    <div class="col-12 col-sm-6">
                      <select name="gender" onChange={e => handleInput(e)} class="form-select bg-light border-0" style={{ height: "55px" }} required >
                        <option value="">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    {/* <div class="col-12 col-sm-6">
                      <div class="date" id="date1" data-target-input="nearest">

                        <form action="">
                          <input type="date" id="birthdaytime" name="date" class="form-control bg-light border-0 datetimepicker-input"
                            placeholder="Appointment Date" onChange={e => handleInput(e)} data-target="#date1" data-toggle="datetimepicker" style={{ height: "55px" }} />

                        </form>
                      </div>


                    </div> */}

                    <div class="col-12 col-sm-6">
                      <label>: Your Appointment date : </label>
                      <input name="phonenumber" disabled type="text" class="form-control bg-light border-0" placeholder={docandpatientappointementdetails.date}
                        value={docandpatientappointementdetails.date} style={{ height: "55px" }} />
                    </div>
                    <div class="col-12 col-sm-6">
                      <label>: Your Appointment Time : </label>
                      <input name="phonenumber" type="text" class="form-control bg-light border-0" value={docandpatientappointementdetails.slot} placeholder="Phone Number" style={{ height: "55px" }} />
                    </div>
                    {/* <div class="col-12 col-sm-6">
                      <select name="time" value={time} onChange={e => handleInput(e)} class="form-select bg-light border-0" style={{ height: "55px" }} >
                        <option selected>Time Slot</option>
                        <option value="10:00 am">10:00 am</option>
                        <option value="12:00 am">12:00 am</option>
                        <option value="04:00 pm">04:00 pm</option>
                        <option value="06:00 pm">06:00 pm</option>
                        <option value="08:00 pm">08:00 pm</option>
                      </select>
                    </div> */}


                    {/* <div class="col-12 col-sm-6">
                                                <div class="time" id="time1" data-target-input="nearest">
                                                    <input type="text"
                                                        class="form-control bg-light border-0 datetimepicker-input"
                                                        placeholder="Appointment Time" data-target="#time1" data-toggle="datetimepicker" style={{ height: "55px" }} />
                                                </div>
                                            </div> */}
                    <div class="col-12">
                      <button onClick={submit} class="btn btn-dark w-100 py-3" type="submit">Make Appointment</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  )
}


export default Appointmentbooking