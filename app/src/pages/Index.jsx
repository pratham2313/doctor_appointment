
import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import img3 from '../assets/img/03.png';
import img2 from '../assets/img/02.png';
import img1 from '../assets/img/01.png';
import online from '../assets/img/online.jpg';
import female from '../assets/img/female.jpeg';



export class Index extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <Header />
                <section class="patient_home_banner" id="home">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 order-sm-1 order-1">
                                <div class="banner_title" data-animation="fadeInLeft" animation-delay="2s" data-delay="0.3s">
                                    <h1>Your Health<br /><span>Our Priority</span></h1>
                                    <p class="py-3">India's Hassle Free Doctor Appointment Booking App. Get Seamless OPD experience by
                                        booking the free appointment with India’s Top specialize doctor online. Q UP enhance the
                                        connection between patient and doctor in best possible manner.</p>
                                    {/* <!-- <ul class="download_btns">
                                        <li>
                                            <a href="" class="app_store"> Download On the <span>Apple Store</span></a>
                                        </li>
                                        <li>
                                            <a href="" class="zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzZZZZZZZZZXzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzZ  SQQWADEAQ"> Get it from <span>Google Play</span></a>
                                        </li>
                                    </ul> --> */}
                                </div>
                            </div>
                            <div class="col-lg-6 order-sm-2 order-2">
                                {/* <iframe width="100%" height="315" class="banner_iframe" src="https://www.youtube.com/embed/hp906o8VAzE"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe> */}
                                <img src={female} class="img-fluid mt-5" alt="Track Your Heatlh with Q UP App" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container-fluid py-5">
                        <div class="container">
                            <div class="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                                {/* <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Services</h5> */}
                                <h1 class="display-4">Excellent Medical Services</h1>
                            </div>
                            <div class="row g-5">
                                <div class="col-lg-4 col-md-6">
                                    <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                        <div class="service-icon mb-4 mt-2">
                                            <i class="fa fa-2x fa-user-md text-black"></i>
                                        </div>
                                        <h4 class="mb-3">Emergency Care</h4>
                                        <p class="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                                        <a class="btn btn-lg btn-primary rounded-pill mb-2" href="">
                                            <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                        <div class="service-icon mb-4 mt-2">
                                            <i class="fa fa-2x fa-procedures text-black"></i>
                                        </div>
                                        <h4 class="mb-3">Operation & Surgery</h4>
                                        <p class="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                                        <a class="btn btn-lg btn-primary rounded-pill mb-2" href="">
                                            <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                        <div class="service-icon mb-4 mt-2">
                                            <i class="fa fa-2x fa-stethoscope text-black"></i>
                                        </div>
                                        <h4 class="mb-3">Outdoor Checkup</h4>
                                        <p class="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                                        <a class="btn btn-lg btn-primary rounded-pill mb-2" href="">
                                            <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                        <div class="service-icon mb-4 mt-2">
                                            <i class="fa fa-2x fa-ambulance text-black"></i>
                                        </div>
                                        <h4 class="mb-3">Ambulance Service</h4>
                                        <p class="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                                        <a class="btn btn-lg btn-primary rounded-pill mb-2" href="">
                                            <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                        <div class="service-icon mb-4 mt-2">
                                            <i class="fa fa-2x fa-pills text-black"></i>
                                        </div>
                                        <h4 class="mb-3">Medicine & Pharmacy</h4>
                                        <p class="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                                        <a class="btn btn-lg btn-primary rounded-pill mb-2" href="">
                                            <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                        <div class="service-icon pb-4 mt-2">
                                            <i class="fa fa-2x fa-microscope text-black"></i>
                                        </div>
                                        <h4 class="mb-3">Blood Testing</h4>
                                        <p class="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                                        <a class="btn btn-lg btn-primary rounded-pill mb-2" href="">
                                            <i class="bi bi-arrow-right "></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="secton_padding bck_sec" id="about_us">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 position-relative">
                                <img style={{ heigth: "600px", width: "600px" }} src={online} class="img-fluid abt_img" alt="India Best Doctor Appointment Booking App" />
                            </div>
                            <div class="col-lg-5">
                                <h4 class="sub_heading">Ask Doctor, in Just One Click!</h4>
                                <h2 class="heading">Consult online via video, audio or text.</h2>
                                <p class="pb-4">Bring your health manager home by installing Q UP. Easy to book appointments, track
                                    health, consult online and keep medical records.</p>
                                {/* <div class="share_app_link">
                                    <form class="row" method="POST" id="frm_patient_send_link_sms" action="javascript:void(0)">
                                        <div class="col-lg-7">
                                            <label class="banner_form_lable">+91</label>
                                            <input type="tel" class="form-control" name="contact_no" id="contact_no" maxlength="10"
                                                placeholder="Enter mobile number" />
                                        </div>
                                        <div class="col-lg-5">
                                            <button type="submit" class="btn btn-primary mb-3">Send App Link</button>
                                        </div>
                                    </form>
                                    <span id='link_status'></span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                <section class="howitworks" id="services">
                    <div class="container">
                        <div class="row">
                            <div class="offset-lg-3 col-lg-6 title_center">
                                <h2 class="sub_heading mb-4">We understand and <br /><span class="clr_heading">care about your
                                    health.</span></h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 mb-5">
                                <div class="service_wrapper">
                                    <div class="service_icon mb-3">
                                        <img src={img2} class="img-fluid" alt="Track Your Heatlh with Q UP App" />
                                    </div>
                                    <div class="service_content">
                                        <h3>Track your Health</h3>
                                        <p>Health Tracker records and manages health statistics and analyses progress. Keeps records of
                                            parameters like weight, blood glucose level, creatinine etc.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 mb-5">
                                <div class="service_wrapper">
                                    <div class="service_icon mb-3">
                                        <img src={img1} class="img-fluid" alt="Store Your Medical History with " />
                                    </div>
                                    <div class="service_content">
                                        <h3>Electronic Medical Records (EMR)</h3>
                                        <p>Digital storage of medical records that can be accessed anytime. Now, there is no need to
                                            worry about keeping the collection of medical records in paper format.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 mb-5">
                                <div class="service_wrapper">
                                    <div class="service_icon mb-3">
                                        <img src={img3} class="img-fluid" alt="Real-time doctor appointment update for your app" />
                                    </div>
                                    <div class="service_content">
                                        <h3>Real-Time Updates</h3>
                                        <p>Get live availability and OPD status of doctors. Updates you about leave, emergency or change
                                            in doctor's schedule.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <section class="secton_padding specialities bck_sec" id="specialties">
                    <div class="container">
                        <div class="row">
                            <div class="offset-lg-3 col-lg-6 title_center">
                                <h2 class="sub_heading mb-4">Our specialties</h2>
                            </div>
                        </div>
                        <div class="doc_specialities slider">
                            <div class="speciality_box animate-plus" data-animations="fadeIn" data-animation-duration="3s"
                                data-animation-delay="250ms" data-animation-when-visible="true">
                                <div class="spec_icon">
                                    <img src="assets/img/icons/gynecology.png" class="img-fluid mb-3" alt="Book Online Appointment with Best Gynecologist" />
                                </div>
                                <div class="spec_content">
                                    <h3>Gynecology</h3>
                                    <p>Menstrual Disorders, Pelvic Pain, Urinary Incontinence etc.</p>
                                    <a href="" class="consult_link" data-bs-toggle="modal" data-bs-target="#consultNowModal">Consult Now
                                        <i class="fas fa-chevron-right"></i></a>
                                </div>
                            </div>
                            <div class="speciality_box animate-plus" data-animations="fadeIn" data-animation-duration="3s"
                                data-animation-delay="250ms" data-animation-when-visible="true">
                                <div class="spec_icon">
                                    <img src="assets/img/icons/001-skin.png" class="img-fluid mb-3" alt="Book Online Appointment with Best Dermatologist" />
                                </div>
                                <div class="spec_content">
                                    <h3>Dermatology</h3>
                                    <p>Acne, Sunburn , Contact Dermatitis, Hives.</p>
                                    <a href="" class="consult_link" data-bs-toggle="modal" data-bs-target="#consultNowModal">Consult Now
                                        <i class="fas fa-chevron-right"></i></a>
                                </div>
                            </div>
                            <div class="speciality_box animate-plus" data-animations="fadeIn" data-animation-duration="3s"
                                data-animation-delay="250ms" data-animation-when-visible="true">
                                <div class="spec_icon">
                                    <img src="assets/img/icons/002-pediatrician.png" class="img-fluid mb-3" alt="Book appointment with best pediatrician in India" />
                                </div>
                                <div class="spec_content">
                                    <h3>pediatrician</h3>
                                    <p>Common Cold, Sinusitis, Diarrhea, Lung Infection etc..</p>
                                    <a href="" class="consult_link" data-bs-toggle="modal" data-bs-target="#consultNowModal">Consult Now
                                        <i class="fas fa-chevron-right"></i></a>
                                </div>
                            </div>
                            <div class="speciality_box animate-plus" data-animations="fadeIn" data-animation-duration="3s"
                                data-animation-delay="250ms" data-animation-when-visible="true">
                                <div class="spec_icon">
                                    <img src="assets/img/icons/003-orthopedic.png" class="img-fluid mb-3" alt="Book an appointment with best orthopedic doctor in india" />
                                </div>
                                <div class="spec_content">
                                    <h3>Orthopedic</h3>
                                    <p>Hamstring Injuries, Back Pain, Knee Pain, Arthritis etc.</p>
                                    <a href="" class="consult_link" data-bs-toggle="modal" data-bs-target="#consultNowModal">Consult Now
                                        <i class="fas fa-chevron-right"></i></a>
                                </div>
                            </div>
                            <div class="speciality_box animate-plus" data-animations="fadeIn" data-animation-duration="3s"
                                data-animation-delay="250ms" data-animation-when-visible="true">
                                <div class="spec_icon">
                                    <img src="assets/img/icons/004-ayurveda.png" class="img-fluid mb-3" alt="book appointment with best ayurvedic doctor in india" />
                                </div>
                                <div class="spec_content">
                                    <h3>Ayurveda</h3>
                                    <p>Anxiety, Asthma, Arthritis, Digestive Problems etc.</p>
                                    <a href="" class="consult_link" data-bs-toggle="modal" data-bs-target="#consultNowModal">Consult Now
                                        <i class="fas fa-chevron-right"></i></a>
                                </div>
                            </div>
                            <div class="speciality_box animate-plus" data-animations="fadeIn" data-animation-duration="3s"
                                data-animation-delay="250ms" data-animation-when-visible="true">
                                <div class="spec_icon">
                                    <img src="assets/img/icons/005-homeopathy.png" class="img-fluid mb-3" alt="book appointment with best homeopathic doctor in india" />
                                </div>
                                <div class="spec_content">
                                    <h3>Homeopathy</h3>
                                    <p>Anxiety, Fever, Pelvic Pain, PCOS etc.</p>
                                    <a href="" class="consult_link" data-bs-toggle="modal" data-bs-target="#consultNowModal">Consult Now
                                        <i class="fas fa-chevron-right"></i></a>
                                </div>
                            </div>
                            <div class="speciality_box animate-plus" data-animations="fadeIn" data-animation-duration="3s"
                                data-animation-delay="250ms" data-animation-when-visible="true">
                                <div class="spec_icon">
                                    <img src="assets/img/icons/006-kidney.png" class="img-fluid mb-3" alt="consult with best urologist or nephrologist in india" />
                                </div>
                                <div class="spec_content">
                                    <h3>Nephro & Uro</h3>
                                    <p>Chronic Kidney Disease, Kidney Stone, Prostate Problems etc.</p>
                                    <a href="" class="consult_link" data-bs-toggle="modal" data-bs-target="#consultNowModal">Consult Now
                                        <i class="fas fa-chevron-right"></i></a>
                                </div>
                            </div>
                            <div class="speciality_box animate-plus" data-animations="fadeIn" data-animation-duration="3s"
                                data-animation-delay="250ms" data-animation-when-visible="true">
                                <div class="spec_icon">
                                    <img src="assets/img/icons/007-dentistry.png" class="img-fluid mb-3" alt="book appointmernt with india’s best dentist online" />
                                </div>
                                <div class="spec_content">
                                    <h3>Dentist</h3>
                                    <p>Bad Breath, Sensitive Teeth, Cracked or Broken Teeth etc.</p>
                                    <a href="" class="consult_link" data-bs-toggle="modal" data-bs-target="#consultNowModal">Consult Now
                                        <i class="fas fa-chevron-right"></i></a>
                                </div>
                            </div>
                            <div class="speciality_box animate-plus" data-animations="fadeIn" data-animation-duration="3s"
                                data-animation-delay="250ms" data-animation-when-visible="true">
                                <div class="spec_icon">
                                    <img src="assets/img/icons/009-eye.png" class="img-fluid mb-3" alt="book online appointment with india top ophthalmology today" />
                                </div>
                                <div class="spec_content">
                                    <h3>Ophthalmology</h3>
                                    <p>Colour Blindness, Dry Eye, Conjunctivitis, Glaucoma etc.</p>
                                    <a href="" class="consult_link" data-bs-toggle="modal" data-bs-target="#consultNowModal">Consult Now
                                        <i class="fas fa-chevron-right"></i></a>
                                </div>
                            </div>
                            <div class="speciality_box animate-plus" data-animations="fadeIn" data-animation-duration="3s"
                                data-animation-delay="250ms" data-animation-when-visible="true">
                                <div class="spec_icon">
                                    <img src="assets/img/icons/011-sore-throat.png" class="img-fluid mb-3" alt="Book online appointment with best otolaryngologist in india" />
                                </div>
                                <div class="spec_content">
                                    <h3>Otolaryngologist</h3>
                                    <p>Throat Infection, Deafness, Low Vision Rehabilitation etc.</p>
                                    <a href="" class="consult_link" data-bs-toggle="modal" data-bs-target="#consultNowModal">Consult Now
                                        <i class="fas fa-chevron-right"></i></a>
                                </div>
                            </div>
                            <div class="speciality_box animate-plus" data-animations="fadeIn" data-animation-duration="3s"
                                data-animation-delay="250ms" data-animation-when-visible="true">
                                <div class="spec_icon">
                                    <img src="assets/img/icons/012-cardiologist.png" class="img-fluid mb-3" alt="consult with best cardiologist doctor in india online" />
                                </div>
                                <div class="spec_content">
                                    <h3>Cardiologist</h3>
                                    <p>Heart Failure, Valve Disease, Chest Pain, Pulmonary Stenosis etc.</p>
                                    <a href="" class="consult_link" data-bs-toggle="modal" data-bs-target="#consultNowModal">Consult Now
                                        <i class="fas fa-chevron-right"></i></a>
                                </div>
                            </div>
                            <div class="speciality_box animate-plus" data-animations="fadeIn" data-animation-duration="3s"
                                data-animation-delay="250ms" data-animation-when-visible="true">
                                <div class="spec_icon">
                                    <img src="assets/img/icons/013-oncologist.png" class="img-fluid mb-3" alt="boo appointment with best oncology in india" />
                                </div>
                                <div class="spec_content">
                                    <h3>Oncologist</h3>
                                    <p>Skin Cancer, Lung Cancer, Bladder Cancer etc.</p>
                                    <a href="" class="consult_link" data-bs-toggle="modal" data-bs-target="#consultNowModal">Consult Now
                                        <i class="fas fa-chevron-right"></i></a>
                                </div>
                            </div>
                            <div class="speciality_box animate-plus" data-animations="fadeIn" data-animation-duration="3s"
                                data-animation-delay="250ms" data-animation-when-visible="true">
                                <div class="spec_icon">
                                    <img src="assets/img/icons/014-pulmonology.png" class="img-fluid mb-3" alt="Consult with best pulmonologist doctor online in india" />
                                </div>
                                <div class="spec_content">
                                    <h3>Pulmonologist</h3>
                                    <p>Pulmonary Edema, Asthma, Bronchiectasis ,Bronchitis, etc.</p>
                                    <a href="" class="consult_link" data-bs-toggle="modal" data-bs-target="#consultNowModal">Consult Now
                                        <i class="fas fa-chevron-right"></i></a>
                                </div>
                            </div>
                            <div class="speciality_box animate-plus" data-animations="fadeIn" data-animation-duration="3s"
                                data-animation-delay="250ms" data-animation-when-visible="true">
                                <div class="spec_icon">
                                    <img src="assets/img/icons/brain.png" class="img-fluid mb-3" alt="book appointment with india best psychiatrist today" />
                                </div>
                                <div class="spec_content">
                                    <h3>Psychiatrist</h3>
                                    <p>Autism, Attention Deficit-Hyperactivity Disorder, etc.</p>
                                    <a href="" class="consult_link" data-bs-toggle="modal" data-bs-target="#consultNowModal">Consult Now
                                        <i class="fas fa-chevron-right"></i></a>
                                </div>
                            </div>
                            <div class="speciality_box animate-plus" data-animations="fadeIn" data-animation-duration="3s"
                                data-animation-delay="250ms" data-animation-when-visible="true">
                                <div class="spec_icon">
                                    <img src="assets/img/icons/016-brain-1.png" class="img-fluid mb-3" alt="book appointment with india best neurologist online today" />
                                </div>
                                <div class="spec_content">
                                    <h3>Neurologist</h3>
                                    <p>Appendicitis, Arthritis, Osteoporosis, Blood Clots etc.</p>
                                    <a href="" class="consult_link" data-bs-toggle="modal" data-bs-target="#consultNowModal">Consult Now
                                        <i class="fas fa-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


                {/* <section class="secton_padding help">
                    <div class="container">
                        <div class="help_sec_wrapper">
                            <div class="row">
                                <div class="col-lg-6 order-sm-2 order-1 position-relative">
                                    <div class="bck_art_help">
                                        <img src="assets/img/mobile_app/app_screens2.png" class="img-fluid" alt="consult with india best surgent,doctor, online by booking an appointment using Q UP app" />
                                    </div>
                                </div>
                                <div class="col-lg-6 order-sm-1 order-2">
                                    <h2 class="sub_heading pb-3">Book your appointment with India’s Top Doctors Today</h2>
                                    <p>Trusted by 1 lakhs+ App Installers</p>
                                    <!-- <ul class="download_btns">
                                        <li>
                                            <a href="" class="app_store"> Download On the <span>Apple Store</span></a>
                                        </li>
                                        <li class="bg-white">
                                            <a href="" class="play_store"> Get it from <span>Google Play</span></a>
                                        </li>
                                    </ul> -->
                                    <div class="share_app_link mt-5">
                                        <form class="row" id="frm_patient_send_link_sms2" method="POST" action="javascript:void(0)">
                                            <div class="col-lg-7">
                                                <label class="banner_form_lable">+91</label>

                                                <input type="tel" class="form-control" name="contact_no" id="contact_no1" maxlength="10" minlength="10"
                                                    placeholder="Enter mobile number" required pattern="[0-9]+" />

                                            </div>
                                            <div class="col-lg-5">
                                                <button type="submit" class="btn btn-primary mb-3">Send App Link</button>

                                            </div>
                                        </form>
                                        <span id='link_status2'></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


                <section class="section_padding faq bck_sec" id="faq">
                    <div class="container">
                        <h2 class="sub_heading text-center pb-4">FAQ</h2>
                        <div class="wrapper">
                            <div class="faq_container">
                                <div class="question">
                                    How do I get started with Q UP's online doctor consultations?
                                </div>
                                <div class="answercont">
                                    <div class="answer">
                                        <p><b>On Q UP, starting an online medical consultation is a simple. Follow these four easy
                                            steps:</b></p>
                                        <ul>
                                            <li>Select your health condition</li>
                                            <li>Speak with a doctor in under 2-3 minutes</li>
                                            <li>Ask the doctor your questions through audio or video chat</li>
                                            <li>Receive a legitimate online doctor prescription.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="faq_container">
                                <div class="question">
                                    What happens if I don't hear back from a doctor?
                                </div>
                                <div class="answercont">
                                    <div class="answer">
                                        <p>In the odd case that an online doctor does not answer, you will receive a full refund.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="faq_container">
                                <div class="question">
                                    Is it safe to have an online consultation?
                                </div>
                                <div class="answercont">
                                    <div class="answer">
                                        <p>Q UP keeps your medical history and online consultations entirely confidential and safe.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="faq_container">
                                <div class="question">
                                    Will I be notified if the doctor cancels the appointment?
                                </div>
                                <div class="answercont">
                                    <div class="answer">
                                        <p>Yes, you will receive the message. All users of Q UP receive message regarding appointment
                                            including reminder, cancel notification or change schedule.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="faq_container">
                                <div class="question">
                                    Will my medical records be saved with the app?
                                </div>
                                <div class="answercont">
                                    <div class="answer">
                                        <p>Yes, the app will maintain electronic medical reports. Patients and their doctors can access
                                            the records during the investigation. You can also keep health track. This includes blood
                                            pressure, cholesterol and sugar levels.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="faq_container">
                                <div class="question">
                                    Can patients ask doctors to come home?
                                </div>
                                <div class="answercont">
                                    <div class="answer">
                                        <p>Yes, if the doctor provides home service. Usually patients book appointment for consultation
                                            or they go along with online consultation. It only takes a few minutes to book an
                                            appointment on Q UP.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section class="section_seo_data">
                    <div class="container">
                        <div class="seo_para">
                            <h2 class="seo_title">Best Online Doctor Consultation App</h2>
                            <p>Q UP is one of the best doctor appointment booking free app in India with more than 20 specialties and
                                5000+ doctors from all over India (including different states). Patient can online schedule appointments
                                with doctors any time as per slot availability. There are more than 20+ specialties where you can select
                                among them like MD medicine, Orthologiest, Cardiologist, Gynecology, Rhetomologist, Diabetologist, etc.
                                Patient from all around India use Q UP app for best doctor consultation.</p>

                            <h3 class="seo_title pt-3">Best Online Doctor Consultation App in India</h3>
                            <p>When people search for best online doctor consultation app then Q UP stands the all above position. The
                                multispeciality approach towards finding out the best speciality is never been an easy job. Q UP helps
                                patient to search among the most prominent doctors all around the India. Now a days, experience of
                                surgeon or doctor also matter and what we found that Q UP company provides the most refined doctors from
                                India. Doctor Booking Online made easy with us. Just one tap and the doctor app link on your smartphone
                            </p>

                            <h2 class="seo_title">Trusted & Secured Online Doctor Consultation App In India</h2>
                            <p>Audio and Video consultation with a doctor is available on Q UP's <a
                                href="https://qupapp.com/patient-home.php#home" target="_blank">online doctor app.</a> Our network
                                of over 5,000+ trusted doctors from 20+ specialties will ensure that all of your health concerns are
                                addressed. Avoid travel by consulting with a Doctor Online on Q UP.</p>

                            <h2 class="seo_title">One-stop Solution For Online Doctor Consultation</h2>
                            <p>Q UP is the one-stop solution for any health concern. Q UP is the best doctor booking app. You can chat
                                with a doctor anytime from the comfort of your home. Q UP is a Convenient and Easy to use doctor
                                consultation app.</p>

                            <h2 class="seo_title">Consult Doctor Online In Various Specializations</h2>
                            <p>You can get online doctor's advice, who specialises in Neurology, Gynaecology, Dermatology, Psychiatry,
                                Pulmonologist, Oncologist, Cardiology, Otolaryngologist,Ophthalmology, Dentist, Nephrology and Urology,
                                Homoeopathy, Ayurveda, Paediatrics, Orthopaedic and many more.</p>

                            <h2 class="seo_title">India’s Best Doctor Appointment App</h2>
                            <p>Q UP is the best app for online doctor consultation. Try India’s best <a
                                href="https://qupapp.com/patient-home.php#home">doctor booking app</a> Q UP and feel the difference.
                                Consult instantly with a doctor on Q UP with 24/7 service available. You can also visit a doctor by
                                taking an appointment through the app.</p>

                            <h2 class="seo_title">India’s Fastest Doctor Booking App</h2>
                            <p>Connect with India's top doctors online on Q UP and take care of you and your loved ones from the comfort
                                of your home. Consult with the best doctor online who specializes in various fields. </p>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Index