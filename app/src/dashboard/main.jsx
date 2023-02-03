
import '../assetsdash/css/material-dashboard.min.css';
// import '../assetsdash/css/material-dashboard.css.map';
// import '../assetsdash/css/material-dashboard.css';
// import '../assetsdash/css/nucleo-svg.css';
import '../assetsdash/css/nucleo-icons.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import '../assetsdash/scss/material-dashboard.scss'

import img1 from '../assets/img/verifier.png';
import Table from './table';

const Main = () => {
    var [doclist, setdoc] = useState([]);
    useEffect(() => {
        const fetchdoctor = async () => {
            // var docdata = {
            //     fullname: "",
            //     phonenumber: "",
            //     email: "",
            //     role: "",
            //     filedoc: {
            //         name: "",
            //         size: "",
            //         type: ""
            //     }
            // }

            const res = await axios.get("http://localhost:8080/doctor/get");
            const docdata = await res.data
            //console.log(docdata);
            //console.log('doctors' >> docdata.fullname);
            setdoc(docdata);
            console.log(docdata);
        };
        fetchdoctor();

    }, []);
    return (
        <div>
            <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
                <div class="sidenav-header">
                    <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                    <a class="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
                        <img src={img1} height="60px" weigth="60px" class="navbar-brand-img ml-10" alt="main_logo" />
                        <span class="ms-1 font-weight-bold text-white ml-10">{'  '}Verifier</span>
                    </a>
                </div>
                <hr class="horizontal light mt-0 mb-2" />
                <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-white active bg-gradient-primary" href="../pages/dashboard.html">
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="material-icons opacity-10">dashboard</i>
                                </div>
                                <span class="nav-link-text ms-1">Dashboard</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white " href="../pages/tables.html">
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="material-icons opacity-10">table_view</i>
                                </div>
                                <span class="nav-link-text ms-1">Tables</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white " href="../pages/billing.html">
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="material-icons opacity-10">receipt_long</i>
                                </div>
                                <span class="nav-link-text ms-1">Billing</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white " href="../pages/virtual-reality.html">
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="material-icons opacity-10">view_in_ar</i>
                                </div>
                                <span class="nav-link-text ms-1">Virtual Reality</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white " href="../pages/rtl.html">
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="material-icons opacity-10">format_textdirection_r_to_l</i>
                                </div>
                                <span class="nav-link-text ms-1">RTL</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white " href="../pages/notifications.html">
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="material-icons opacity-10">notifications</i>
                                </div>
                                <span class="nav-link-text ms-1">Notifications</span>
                            </a>
                        </li>
                        <li class="nav-item mt-3">
                            <h6 class="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages</h6>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white " href="../pages/profile.html">
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="material-icons opacity-10">person</i>
                                </div>
                                <span class="nav-link-text ms-1">Profile</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white " href="../pages/sign-in.html">
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="material-icons opacity-10">login</i>
                                </div>
                                <span class="nav-link-text ms-1">Sign In</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white " href="../pages/sign-up.html">
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="material-icons opacity-10">assignment</i>
                                </div>
                                <span class="nav-link-text ms-1">Sign Up</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </aside>
            <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                {/* <!-- Navbar --> */}
                <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
                    <div class="container-fluid py-1 px-3">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href='/#' >Verifier</a></li>
                                {/* <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li> */}
                            </ol>
                            <h6 class="font-weight-bolder mb-0">Dashboard</h6>
                        </nav>
                        <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4 " id="navbar">
                            {/* <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                                <div class="input-group input-group-outline">
                                    <label class="form-label">Type here...</label>
                                    <input type="text" class="form-control"/>
                                </div>
                            </div> */}
                            <ul class="navbar-nav  justify-content-end">

                                <li style={{ paddingLeft: "1340px" }} class="nav-item d-flex align-items-center">
                                    <a href="../pages/sign-in.html" class="nav-link text-body font-weight-bold px-0">
                                        <i class="fa fa-user me-sm-1"></i>
                                        <span class="d-sm-inline d-none">Sign In</span>
                                    </a>
                                </li>
                                {/* <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
                                    <a href="javascript:;" class="nav-link text-body p-0" id="iconNavbarSidenav">
                                        <div class="sidenav-toggler-inner">
                                            <i class="sidenav-toggler-line"></i>
                                            <i class="sidenav-toggler-line"></i>
                                            <i class="sidenav-toggler-line"></i>
                                        </div>
                                    </a>
                                </li> */}
                                <li class="nav-item dropdown pe-2 d-flex align-items-center">
                                    <a href="/#" class="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa fa-bell cursor-pointer"></i>
                                    </a>
                                    <ul class="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                                        <li class="mb-2">
                                            <a class="dropdown-item border-radius-md" href="/#">
                                                <div class="d-flex py-1">
                                                    <div class="my-auto">
                                                        <img src="../assets/img/team-2.jpg" class="avatar avatar-sm  me-3 " alt='i' />
                                                    </div>
                                                    <div class="d-flex flex-column justify-content-center">
                                                        <h6 class="text-sm font-weight-normal mb-1">
                                                            <span class="font-weight-bold">New message</span> from Laur
                                                        </h6>
                                                        <p class="text-xs text-secondary mb-0">
                                                            <i class="fa fa-clock me-1"></i>
                                                            13 minutes ago
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="mb-2">
                                            <a class="dropdown-item border-radius-md" href="/#">
                                                <div class="d-flex py-1">
                                                    <div class="my-auto">
                                                        <img src="../assets/img/small-logos/logo-spotify.svg" class="avatar avatar-sm bg-gradient-dark  me-3 " alt='i' />
                                                    </div>
                                                    <div class="d-flex flex-column justify-content-center">
                                                        <h6 class="text-sm font-weight-normal mb-1">
                                                            <span class="font-weight-bold">New album</span> by Travis Scott
                                                        </h6>
                                                        <p class="text-xs text-secondary mb-0">
                                                            <i class="fa fa-clock me-1"></i>
                                                            1 day
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>

                                    </ul>
                                </li>



                            </ul>
                        </div>
                    </div>
                </nav >
                {/* <!-- End Navbar --> */}
                < div class="container-fluid py-4" >
                    <div class="row">
                        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div class="card">
                                <div class="card-header p-3 pt-2">
                                    <div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                        <i class="material-icons opacity-10">weekend</i>
                                    </div>
                                    <div class="text-end pt-1">
                                        <p class="text-sm mb-0 text-capitalize">Total Unverified Doctor</p>
                                        <h4 class="mb-0">{doclist.length}</h4>
                                    </div>
                                </div>
                                <hr class="dark horizontal my-0" />
                                <div class="card-footer p-3">
                                    <p class="mb-0"><span class="text-success text-sm font-weight-bolder">+55% </span>than last week</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div class="card">
                                <div class="card-header p-3 pt-2">
                                    <div class="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                                        <i class="material-icons opacity-10">person</i>
                                    </div>
                                    <div class="text-end pt-1">
                                        <p class="text-sm mb-0 text-capitalize">Today's Users</p>
                                        <h4 class="mb-0">2,300</h4>
                                    </div>
                                </div>
                                <hr class="dark horizontal my-0" />
                                <div class="card-footer p-3">
                                    <p class="mb-0"><span class="text-success text-sm font-weight-bolder">+3% </span>than last month</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div class="card">
                                <div class="card-header p-3 pt-2">
                                    <div class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                                        <i class="material-icons opacity-10">person</i>
                                    </div>
                                    <div class="text-end pt-1">
                                        <p class="text-sm mb-0 text-capitalize">New Clients</p>
                                        <h4 class="mb-0">3,462</h4>
                                    </div>
                                </div>
                                <hr class="dark horizontal my-0" />
                                <div class="card-footer p-3">
                                    <p class="mb-0"><span class="text-danger text-sm font-weight-bolder">-2%</span> than yesterday</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6">
                            <div class="card">
                                <div class="card-header p-3 pt-2">
                                    <div class="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                                        <i class="material-icons opacity-10">weekend</i>
                                    </div>
                                    <div class="text-end pt-1">
                                        <p class="text-sm mb-0 text-capitalize">Sales</p>
                                        <h4 class="mb-0">$103,430</h4>
                                    </div>
                                </div>
                                <hr class="dark horizontal my-0" />
                                <div class="card-footer p-3">
                                    <p class="mb-0"><span class="text-success text-sm font-weight-bolder">+5% </span>than yesterday</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div >
                <Table />
            </main >



        </div >

    )

}


export default Main