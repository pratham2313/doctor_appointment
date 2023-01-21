import React from 'react'
import Footer from './Footer';
import img1 from '../assets/img/images.png';

const Doctorreg = () => {
  return (
    <div>

      <header>
        <nav class="navbar navbar-expand-lg shadow navbar-light" id="patient_nav">
          <div class="container">
            <button class="navbar-toggler navbar-left collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content">
              <div class="hamburger-toggle">
                <div class="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </button>
            <a class="navbar-brand" href="index.php"><img src={img1} class="img-fluid" alt="India’s best doctor healthcare app solution provider" style={{ height: "50px", weight: "50px" }} /></a>
            <div class="collapse navbar-collapse" id="navbar-content">
              <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about_us">Book Doctor</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#services">Facilities</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#specialties">Specialties</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#faq">FAQ</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link msp_5" style={{ backgroundColor: "blue", marginLeft: "400px" }} href="doctor-home.php">I'm Patient</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
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
                    <form action="https://qupapp.us14.list-manage.com/subscribe/post?u=dd80eb08d9cc3b8010abc039f&amp;id=34a0b4f4e9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self">
                      <div id="mc_embed_signup_scroll">

                        <div class="indicates-required"><span class="asterisk"></span> </div>
                        <div class="mc-field-group form-group">
                          <label for="mce-MMERGE1" class="mb-1 mt-3">Full Name </label>
                          <input type="text" value="" name="MMERGE1" class="form-control" id="mce-MMERGE1" />
                        </div>
                        <div class="mc-field-group size1of2 form-group">
                          <label for="mce-PHONE" class="mb-1 mt-3">Phone Number </label>
                          <input type="text" name="PHONE" class="form-control" value="" id="mce-PHONE" />
                        </div>
                        <div class="mc-field-group form-group">
                          <label for="mce-EMAIL" class="mb-1 mt-3">Email Address *<span
                            class="asterisk"></span></label>
                          <input type="email" value="" name="EMAIL" class="email form-control"
                            id="mce-EMAIL" required="true" />
                        </div>
                        <div class="mc-field-group form-group">
                          <label for="mce-MMERGE1" class="mb-1 mt-3">Password</label>
                          <input type="text" value="" name="MMERGE1" class="form-control" id="mce-MMERGE1" />
                        </div>
                        <div class="mc-field-group form-group">
                          <label for="mce-MMERGE1" class="mb-1 mt-3">Confirm Password</label>
                          <input type="text" value="" name="MMERGE1" class="form-control" id="mce-MMERGE1" />
                        </div>


                        <div class="mc-field-group mb-5">
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
                        </div>
                        <div class="mc-field-group form-group">
                          <label for="mce-MMERGE1" class="mb-1 mt-3">Upload required documents(in one pdf)</label>
                          <input type="file" value="" name="MMERGE1" class="form-control" id="mce-MMERGE1" />
                        </div>


                        <div id="mce-responses" class="clear foot">
                          <div class="response" id="mce-error-response" style={{ display: NaN }}></div>
                          <div class="response" id="mce-success-response" style={{ display: NaN }}></div>
                        </div>
                        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true"><input type="text" name="b_dd80eb08d9cc3b8010abc039f_34a0b4f4e9" tabindex="-1" value="" /></div>
                        <div class="row">
                          <div class=" col-2 optionalParent">
                            <div class="clear foot pt-4 ">
                              <input type="submit" value="Submit" name="subscribe"
                                id="mc-embedded-subscribe"
                                class="button btn btn-primary bt mt-5 get_demo_btn" />

                            </div>
                          </div>
                          <div class=" col-2 optionalParent ">
                            <div class="clear foot pt-4 ">
                              <input type="submit" value="Login" name="subscribe"
                                id="mc-embedded-subscribe"
                                class="button btn btn-primary bt mt-5 get_demo_btn" />

                            </div>
                          </div>


                        </div>

                      </div>
                    </form>
                  </div>


                </div>
              </div>
            </div>


          </div>



        </div>


      </section >
      <Footer />
    </div >
  )
}

export default Doctorreg