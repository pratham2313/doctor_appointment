// import img1 from '../images/stath.jpg';
import Header from './Header';
import Footer from './Footer';
// import css from '../images/patientreg.css';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import axios, { isCancel, AxiosError } from 'axios';
import { Link, useNavigate } from "react-router-dom";
function Patientreg() {
    const [patientdetails, setdetails] = useState({
        fullname: "", phonenumber: "", email: "", password: "", confirmpassword: "",
    })
    const { fullname, phonenumber, email, password, confirmpassword } = patientdetails;
    const handleInput = (e) => {
        setdetails({ ...patientdetails, [e.target.name]: e.target.value });
    }
    const submit = async e => {
        console.log("submit call");
        e.preventDefault();
        if (patientdetails.password === patientdetails.confirmpassword) {
            await axios.post("http://localhost:8080/register", patientdetails).then((res) => {
                //console.log(res);
                if (res.data.message === "ok") {
                    toast.success("registration Successful");
                    var i = 0;
                    var count = 0;
                    for (i = 0; i < 100000; i++) {
                        count = count + 1;
                    }
                    if (count > 1000) {
                        toast.info("Now You can login with your email and pass");
                    }

                }
                if (res.data.message === "error") {
                    toast.error("Something went wrong");
                }
                if (res.data.message === "Exists") {
                    toast.error("User already exist on this email");
                }


            });
        }
        else {
            toast.error("Password doesn't match with Confirpassword");
        }


    }





    return (
        <div>
            <Header />
            <section class="home-banner">

                <div class="container">
                    <div class="row">
                        <div class=" col-4  d-flex align-items-center">
                            <div class="banner_title" data-animation="fadeInLeft" animation-delay="2s" data-delay="0.3s">
                                <h1>My Online Address<br /><span>My Digital Clinic</span></h1>
                                <p class="py-3">Establish medical practice online and grow it digitally, easing clinic management.
                                </p>
                            </div>
                        </div>
                        <div class="container col-6 mt-lg-5"  >
                            <div class=" px-xl-5">
                                <div class="lead_magnet_form_wrapper">
                                    <div class="form_title">
                                        <h4 class="sub_heading">Register Here :</h4>
                                        <h3 class="heading mb-2 pb-1">Fill details</h3>
                                    </div>
                                    <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css" rel="stylesheet" type="text/css" />

                                    <div id="">
                                        <form >
                                            <div id="mc_embed_signup_scroll">

                                                <div class="indicates-required"><span class="asterisk"></span> </div>
                                                <div class="mc-field-group form-group">
                                                    <label for="mce-MMERGE1" class="mb-1 mt-3">Full Name </label>
                                                    <input type="text" name="fullname" value={fullname} onChange={(e) => handleInput(e)} class="form-control" id="mce-MMERGE1" required="true" />
                                                </div>
                                                <div class="mc-field-group size1of2 form-group">
                                                    <label for="mce-PHONE" class="mb-1 mt-3">Phone Number </label>
                                                    <input type="text" name="phonenumber" value={phonenumber} onChange={(e) => handleInput(e)} class="form-control" id="mce-PHONE" required="true" />
                                                </div>
                                                <div class="mc-field-group form-group">
                                                    <label for="mce-EMAIL" class="mb-1 mt-3">Email Address *<span
                                                        class="asterisk"></span></label>
                                                    <input type="email" name="email" value={email} onChange={(e) => handleInput(e)} class="email form-control"
                                                        id="mce-EMAIL" required="true" />
                                                </div>
                                                <div class="mc-field-group form-group">
                                                    <label for="mce-MMERGE1" class="mb-1 mt-3">Password</label>
                                                    <input type="text" name="password" value={password} onChange={(e) => handleInput(e)} class="form-control" id="mce-MMERGE1" required="true" />
                                                </div>
                                                <div class="mc-field-group form-group">
                                                    <label for="mce-MMERGE1" class="mb-1 mt-3">Confirm Password</label>
                                                    <input type="text" name="confirmpassword" value={confirmpassword} onChange={(e) => handleInput(e)} class="form-control" id="mce-MMERGE1" required="true" />
                                                </div>

                                                {/* <div class="mc-field-group mb-5">
                                                    <label for="mce-MMERGE2" class="mb-1 mt-3">Specialty </label>
                                                    <select name="MMERGE2" class="form-select form-control" id="mce-MMERGE2">
                                                        <option value="">Select Specialty</option>
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
                                                        <option value="Radiologist">Radiologist</option>
                                                    </select>
                                                </div> */}


                                                <div id="mce-responses" class="clear foot">
                                                    <div class="response" id="mce-error-response" style={{ display: NaN }}></div>
                                                    <div class="response" id="mce-success-response" style={{ display: NaN }}></div>
                                                </div>
                                                <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true"><input type="text" name="b_dd80eb08d9cc3b8010abc039f_34a0b4f4e9" tabindex="-1" value="" /></div>
                                                <div class="row">
                                                    <div class=" col-2 optionalParent">
                                                        <div class="clear foot pt-4 ">
                                                            <input type="submit" onClick={submit}
                                                                id="mc-embedded-subscribe"
                                                                class="button btn btn-primary bt mt-5 get_demo_btn" />

                                                        </div>
                                                    </div>
                                                    {/* <div class=" col-2 optionalParent ">
                                                        <div class="clear foot pt-4 ">
                                                            <input type="submit" value="Login" onClick={login}
                                                                id="mc-embedded-subscribe"
                                                                class="button btn btn-primary bt mt-5 get_demo_btn" />
                                                            <button onClick={submit} class="btn btn-dark w-100 py-3" type="submit">Submit</button>
                                                                <button onClick={submit} class="btn btn-dark w-100 py-3" type="submit">Login</button>

                                                        </div>
                                                    </div> */}


                                                </div>

                                            </div>
                                        </form><br />
                                        <Link style={{ textDecoration: "none" }} to="/patientlogin">Already have an account?</Link>
                                    </div>


                                </div>
                            </div>
                        </div>


                    </div>



                </div>


            </section >
            <Footer />
            <ToastContainer />
        </div >





    )
}
export default Patientreg



