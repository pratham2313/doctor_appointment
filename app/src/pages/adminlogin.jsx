// import img1 from '../images/stath.jpg';
import Header from './Header';
import Footer from './Footer';
// import css from '../images/patientreg.css';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import axios, { isCancel, AxiosError } from 'axios';
import { Link, useNavigate } from "react-router-dom";


const Adminlogin = () => {
  const [admindetails, setdetails] = useState({
    email: "", password: ""
  })
  const { email, password } = admindetails;
  const handleInput = (e) => {
    setdetails({ ...admindetails, [e.target.name]: e.target.value });
  }
  const navigate = useNavigate();
  const submit = async (e) => {
    if (admindetails.email == "" || admindetails.password == "") {
      toast.error("Fill info first");
    }
    else {
      console.log("submit call");
      e.preventDefault();

      await axios.post("http://localhost:8080/adminlogin", admindetails).then((res) => {
        //console.log(res);
        if (res.data.message === "ok") {
          localStorage.setItem('admintoken', res.data.token);
          toast.success("login Successful");
          setTimeout(() => {
            navigate('/dashmain');
          }, 1200)


          //toast.info("Now You can login with your email and pass");
        }
        if (res.data.message === "don'tmatch") {
          toast.error("email or password not match");
          //toast.info("Now You can login with your email and pass");
        }
        if (res.data.message === "error") {
          toast.error("User not exists");
        }
        // if (res.data.message === "Exists") {
        //   toast.error("User already exist on this email");
        // }


      });
    }
  }
  const styles = {
    imageabc: {
      height: "100%",
      backgroundImage: `url(${"8.jpg"})`,
      backgroundSize: 'cover',
      backgroundPosition: 'left',
      filter: ` blur(6px)`


    }
  }
  const bdcontent = {
    backgroundColor: "rgb(0,0,0)", /* Fallback color */
    backgroundColor: "rgba(0,0,0, 0.4)", /* Black w/opacity/see-through */
    color: `white`,
    fontWeight: `bold`,
    border: `3px`,
    borderRadius: "50px",
    position: `absolute`,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    zIndex: `2`,
    width: `80%`,
    padding: `20px`,

  }
  return (
    <>
      <div style={styles.imageabc}></div>
      <div style={bdcontent}>
        <section class="home-banner">
          <div class="container">
            <div class="row">
              <div class="container col-6 mt-lg-5"  >
                <div class=" px-xl-5">
                  <div class="lead_magnet_form_wrapper">
                    <div class="form_title">
                      <h4 class="sub_heading">Admin Login :</h4>
                      <h3 class="heading mb-2 pb-1">Fill details</h3>
                    </div>
                    <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css" rel="stylesheet" type="text/css" />

                    <div id="">
                      <form>
                        <div id="mc_embed_signup_scroll">


                          <div class="mc-field-group form-group">
                            <label for="mce-EMAIL" class="mb-1 mt-3">Email Address *<span
                              class="asterisk"></span></label>
                            <input type="email" name="email" value={email} onChange={(e) => handleInput(e)} class="email form-control"
                              id="mce-EMAIL" required="true" />
                          </div>
                          <div class="mc-field-group form-group">
                            <label for="mce-MMERGE1" class="mb-1 mt-3">Password *</label>
                            <input type="password" name="password" value={password} onChange={(e) => handleInput(e)} class="form-control" id="mce-MMERGE1" required="true" />
                          </div>


                          <div id="mce-responses" class="clear foot">
                            <div class="response" id="mce-error-response" style={{ display: NaN }}></div>
                            <div class="response" id="mce-success-response" style={{ display: NaN }}></div>
                          </div>
                          <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true"><input type="text" name="b_dd80eb08d9cc3b8010abc039f_34a0b4f4e9" tabindex="-1" value="" /></div>
                          <div class="row">
                            <div class=" col-3 optionalParent">
                              <div class="clear foot pt-4 ">
                                <input type="submit" onClick={(e) => submit(e)}
                                  id="mc-embedded-subscribe"
                                  class="button btn btn-primary bt mt-5 get_demo_btn" />

                              </div>
                            </div>
                            <div class=" col-3 optionalParent">
                              <div class="clear foot pt-4 pl-10 ">
                                <Link class="button btn btn-primary bt " style={{ textDecoration: "none" }} to="/">Home</Link>
                              </div>
                            </div>



                          </div>

                        </div>
                      </form>
                      <br />
                      <Link style={{ textDecoration: "none" }} to="/verifierlogin">Are you a verifier ?</Link>
                    </div>


                  </div>
                </div>
              </div>


            </div>



          </div>


        </section >

        <ToastContainer />
      </div >
    </>





  )
}

export default Adminlogin