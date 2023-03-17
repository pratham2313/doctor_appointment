import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function PatientDashboard() {
    var [doclist, setdoc] = useState([]);
    useEffect(() => {
        const fetchdoctor = async () => {
            const res = await axios.get("http://localhost:8080/doctor/get");
            const docdata = await res.data
            setdoc(docdata);
            console.log(docdata);
        };
        fetchdoctor();

    }, []);



    var docpdf = { docmail: "" };
    var docstatus = { doctormail: "" };
    var [doclist, setdoc] = useState([]);
    const fetchdoctor = async () => {
        const res = await axios.get("http://localhost:8080/doctor/get");
        const docdata = await res.data
        //console.log(docdata);
        //console.log('doctors' >> docdata.fullname);
        setdoc(docdata);
        console.log(docdata);
    };
    useEffect(() => {

        fetchdoctor();

    }, []);

    function getdocpdf(e) {
        console.log("getdoc");
        //setdocument({ ...docpdf, docmail: e.target.value });
        docpdf.docmail = e.target.value;
        console.log(docpdf);
        //setdocument(e);
        axios.post("http://localhost:8080/getpdf", docpdf).then((res) => {
            if (res.data.message === "filenowread") {
                //window.location.href = "http://localhost:8080/readpdf";
                window.open(
                    'http://localhost:8080/readpdf',
                    '_blank' // <- This is what makes it open in a new window.
                );
            }

            // if (res) {
            //     axios.get("http://localhost:8080/readpdf");
            // }
        })
    }

    function Changedocstatus(e) {
        console.log("change doc");
        //setdocument({ ...docpdf, docmail: e.target.value });
        docstatus.doctormail = e.target.value;
        console.log(docstatus);
        //setdocument(e);
        axios.post("http://localhost:8080/changestatus", docstatus).then((res) => {
            if (res.data.message === "doctor verified") {
                console.log("if called");
                toast.success("doctor verified");
                window.location.reload(true)
            }
            if (res.data.message === "no user") {
                toast.error("no user found");
            }
        })




    }
    return (
        <div>
            <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-dark" id="sidenav-main">
                <div class="sidenav-header">
                    <h4 style={{ color: "white", paddingTop: "20px", paddingLeft: "25px" }} >Patient dashboard</h4>
                </div>
                <hr class="horizontal light mt-0 mb-2" />
                <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-white " href="../pages/tables.html">
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    {/* <i class="material-icons opacity-10">table_view</i> */}
                                </div>
                                <span class="nav-link-text ms-1">My Details</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white active bg-gradient-primary" href="../pages/dashboard.html">
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    {/* <i class="material-icons opacity-10">dashboard</i> */}
                                </div>
                                <span class="nav-link-text ms-1">Pendding Appointment</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white " href="../pages/billing.html">
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    {/* <i class="material-icons opacity-10">receipt_long</i> */}
                                </div>
                                <span class="nav-link-text ms-1">Doned Appointment</span>
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
                                <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href='/#' >Patient</a></li>
                                {/* <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li> */}
                            </ol>
                            <h6 class="font-weight-bolder mb-0">Dashboard</h6>
                        </nav>
                    </div>
                </nav >
                {/* <!-- End Navbar --> */}
                < div class="container-fluid py-4" >
                    <div class="row">
                        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div class="card">
                                <div class="card-header p-3 pt-2">
                                    <div class="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                                        <i class="material-icons opacity-10">person</i>
                                    </div>
                                    <div class="text-end pt-1">
                                        <p class="text-sm mb-0 text-capitalize">Pendding Appointment</p>
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
                                        <p class="text-sm mb-0 text-capitalize">Done Appointment</p>
                                        <h4 class="mb-0">3,462</h4>
                                    </div>
                                </div>
                                <hr class="dark horizontal my-0" />
                                <div class="card-footer p-3">
                                    <p class="mb-0"><span class="text-danger text-sm font-weight-bolder">-2%</span> than yesterday</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div >
                <div class="container-fluid py-4">
                    <div class="row">
                        <div class="col-12">
                            <div class="card my-4">
                                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                    <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                        <h6 class="text-white text-capitalize ps-3">Newly register Doctor</h6>
                                    </div>
                                </div>
                                <div class="card-body px-0 pb-2">
                                    <div class="table-responsive p-0">
                                        <table class="table align-items-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">DoctorName</th>
                                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Date</th>
                                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Time</th>
                                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    doclist.map(doc => (
                                                        <>
                                                            <tr >
                                                                <td>
                                                                    <div class="d-flex px-2 py-1">
                                                                        <div class="d-flex flex-column justify-content-center">
                                                                            <h6 class="mb-0 text-sm">{doc.fullname}</h6>
                                                                            <p class="text-xs text-secondary mb-0">{doc.email}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h6 class=" text-sm font-weight-bold mb-0" style={{ fontSize: "20px" }}>{doc.specialty}</h6>
                                                                    {/* <p class="text-xs text-secondary mb-0">Organization</p> */}
                                                                </td>
                                                                <td>
                                                                    <h6 class=" text-sm font-weight-bold mb-0" style={{ fontSize: "20px" }}>{doc.specialty}</h6>
                                                                    {/* <p class="text-xs text-secondary mb-0">Organization</p> */}
                                                                </td>
                                                                <td class="align-middle text-center text-sm">
                                                                    <span class="badge badge-sm bg-gradient-success">{doc.role}</span>
                                                                </td>

                                                            </tr>
                                                        </>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >



        </div >
    )
}

export default PatientDashboard