import React from 'react'

const HomePage = () => {
    console.log('i am call');
    return (
        <div>
            <section class="home_banner">
                <div class="banner_image_back">
                    <img src="assets/img/doctor-1.jpg" alt="Best Online Doctor Consultation App for HealthCare or Clinic"
                        class="img-fluid vector_desktop" />
                    <img src="assets/img/doctor-4.jpg" alt="Best Online Doctor Consultation App for HealthCare or Clinic"
                        class="img-fluid vector_mobile" />
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="download_app_btn download_app_btn_left">
                            <a href="/patientreg" target="_self" style={{ textDecoration: "none" }} >I'm Patient</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="download_app_btn download_app_btn_right doc_btn_brd">
                            <a href="/docreg" target="_self" style={{ textDecoration: "none" }}>I'm Doctor</a>
                        </div>
                    </div>
                </div>
            </section>
            <div class="whatsapp-cta-container">
                <a href="https://wa.link/0do5db" target="_blank" rel="noopener noreferrer" ><i style={{ fontSize: 30 }} class="fas fa-users"></i></a>
            </div>


        </div>

    );
}

export default HomePage