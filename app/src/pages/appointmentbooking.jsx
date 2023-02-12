
import React, { Component } from 'react';
import { useState, useEffect } from "react";
import Header from './Header';
import Footer from './Footer';
import Select from "react-select";
import axios, { isCancel, AxiosError } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//pehela pehela pyar he.....

function Appointmentbooking() {

  const [appodetails, setdetails] = useState({
    specialist: "", docname: "", username: "", email: "", phonenumber: "", gender: "", date: "", time: ""
  })

  const { specialist, docname, username, email, phonenumber, gender, date, time } = appodetails;


  const handleInput = (e) => {
    setdetails({ ...appodetails, [e.target.name]: e.target.value });
  }
  const Specialist = [
    {
      value: "Gynecology",
      label: "Gynecology"
    },
    {
      value: "Dermatology",
      label: "Dermatology"
    },
    {
      value: "Orthopedic",
      label: "Orthopedic"
    },
    {
      value: "Ayurveda",
      label: "Ayurveda"
    },
    {
      value: "Homeopathy",
      label: "Homeopathy"
    },
    {
      value: "Nephrologist",
      label: "Nephrologist"
    },
    {
      value: "Urologist",
      label: "Urologist"
    },
    {
      value: "Neurologist",
      label: "Neurologist"
    },
    {
      value: "Dentist",
      label: "Dentist"
    },
    {
      value: "Ophthalmology",
      label: "Ophthalmology"
    },
    {
      value: "Cardiologist",
      label: "Cardiologist"
    },
    {
      value: "Pulmonologist",
      label: "Pulmonologist"
    },
    {
      value: "Psychiatrist",
      label: "Psychiatrist"
    },
    {
      value: "Neurologist",
      label: "Neurologist"
    },
    {
      value: "Radiologist",
      label: "Radiologist"
    },

    {
      value: "Pediatrician",
      label: "Pediatrician"
    }
  ];

  const Gynecology = [
    {
      value: "1",
      label: "1"
    },
    {
      value: "2",
      label: "2"
    },
    {
      value: "3",
      label: "3"
    }
  ];
  const Dermatology = [
    {
      value: "C++",
      label: "C++"
    },
    {
      value: "java",
      label: "java"
    },
    {
      value: "Python",
      label: "Python"
    },
    {
      value: "C#",
      label: "C#"
    }
  ];
  const Orthopedic = [
    {
      value: "Arrays",
      label: "Arrays"
    },
    {
      value: "LinkedList",
      label: "LinkedList"
    },
    {
      value: "Stack",
      label: "Stack"
    },
    {
      value: "Queue",
      label: "Queue"
    }
  ];
  const notselect = [
    {
      value: "specialist not select",
      lable: "specialist not select"
    }
  ]

  const [selected, setSelected] = useState("");

  let type = null;

  if (selected === "Gynecology") {
    type = Gynecology;
  } else if (selected === "Dermatology") {
    type = Dermatology;
  } else if (selected === "Orthopedic") {
    type = Orthopedic;
  }
  let updatedValue = {};
  const changeSelectOptionHandler = (event) => {
    console.log(event.value);
    setSelected(event.value);
    updatedValue = { specialist: event.value };
    //setdetails({ ...appodetails, [e.target.name]: e.target.value });
    setdetails({ ...appodetails, ...updatedValue });
  };
  const changedocName = (event) => {
    updatedValue = { docname: event.value };
    setdetails({ ...appodetails, ...updatedValue });
  };

  const submit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:8080/addappoinfo", appodetails).then(() => {
      toast.success("Your Appointment Successfully booked");
    });

  }





  return (

    <div  >
      <Header />
      <div class="container-fluid bg-primary bg-appointment mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ marginTop: "50px" }} >
        <div class="container">
          <div class="row gx-5">
            <div class="col-lg-6 py-5">
              <div class="py-5">
                <h1 class="display-5 text-black mb-4">We Are A Certified and Award Winning Dental Clinic You Can Trust</h1>
                <p class="text-black mb-0">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                <h1 class="text-black mb-4" style={{ color: "black" }}>Make Appointment</h1>
                <form>
                  <div class="row g-3">

                    <div class="col-12 col-sm-6">
                      <Select
                        options={Specialist}
                        placeholder={<div>Select Specialist</div>}
                        autoFocus={true}
                        onChange={changeSelectOptionHandler}
                      ></Select>

                      {/* <option value="">Select Specialty</option>
                        <option value="Gynecology">Gynecology</option>
                        <option value="Dermatology">Dermatology</option>
                        <option value="Pediatrician">Pediatrician</option>
                        <option value="Orthopedic">Orthopedic</option>
                        <option value="Ayurveda">Ayurveda</option>
                        <option value="Homeopathy">Homeopathy</option>
                        <option value="Nephrologist">Nephrologist</option>
                        <option value="Urologist">Urologist</option>
                        <option value="Neurologist">Neurologist</option>
                        <option value="Dentist">Dentist</option>
                        <option value="Ophthalmology">Ophthalmology</option>
                        <option value="Cardiologist">Cardiologist</option>
                        <option value="Oncologist">Oncologist</option>
                        <option value="Pulmonologist">Pulmonologist</option>
                        <option value="Psychiatrist">Psychiatrist</option>
                        <option value="Neurologist">Neurologist</option>
                        <option value="Radiologist">Radiologist</option> */}

                    </div>
                    <div class="col-12 col-sm-6">
                      <Select
                        options={type}

                        placeholder={<div>Select Doctor</div>}
                        onChange={changedocName}
                      // onChange={e => handleInput(e)}

                      ></Select>
                      {/* <select class="form-select bg-light border-0" style={{ height: "55px" }} >
                        <option selected>Select A Service</option>
                        <option value="1">Service 1</option>
                        <option value="2">Service 2</option>
                        <option value="3">Service 3</option>
                      </select> */}

                    </div>
                    <div class="col-12 col-sm-6">
                      <input name="username" value={username} onChange={e => handleInput(e)} type="text" class="form-control bg-light border-0" placeholder="Your Name" style={{ height: "55px" }} />
                    </div>
                    <div class="col-12 col-sm-6">
                      <input name="email" value={email} onChange={e => handleInput(e)} type="email" class="form-control bg-light border-0" placeholder="Your Email" style={{ height: "55px" }} />
                    </div>
                    <div class="col-12 col-sm-6">
                      <input name="phonenumber" value={phonenumber} onChange={e => handleInput(e)} type="text" class="form-control bg-light border-0" placeholder="Phone Number" style={{ height: "55px" }} />
                    </div>
                    <div class="col-12 col-sm-6">
                      <select name="gender" value={gender} onChange={e => handleInput(e)} class="form-select bg-light border-0" style={{ height: "55px" }} >
                        <option selected>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="date" id="date1" data-target-input="nearest">

                        <form action="">
                          <input type="date" id="birthdaytime" name="date" class="form-control bg-light border-0 datetimepicker-input"
                            placeholder="Appointment Date" value={date} onChange={e => handleInput(e)} data-target="#date1" data-toggle="datetimepicker" style={{ height: "55px" }} />

                        </form>
                      </div>


                    </div>
                    <div class="col-12 col-sm-6">
                      <select name="time" value={time} onChange={e => handleInput(e)} class="form-select bg-light border-0" style={{ height: "55px" }} >
                        <option selected>Time Slot</option>
                        <option value="10:00 am">10:00 am</option>
                        <option value="12:00 am">12:00 am</option>
                        <option value="04:00 pm">04:00 pm</option>
                        <option value="06:00 pm">06:00 pm</option>
                        <option value="08:00 pm">08:00 pm</option>
                      </select>
                    </div>


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