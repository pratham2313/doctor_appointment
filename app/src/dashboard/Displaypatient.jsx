import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Displaypatient() {
    var docpdf = { docmail: "" };
    var [patientlist, setpatientlist] = useState([]);
    const fetchpatient = async () => {
        const res = await axios.get("http://localhost:8080/patient/get");
        const vdocdata = res.data.vdata;
        console.log(vdocdata);
        setpatientlist(vdocdata);
    };
    useEffect(() => {

        fetchpatient();

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


    return (
        <div>
            <div class="container-fluid py-4">
                <div class="row">
                    <div class="col-12">
                        <div class="card my-4">
                            < div class="container-fluid py-4" >
                                <div class="row">
                                    {/* <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
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
                        </div> */}
                                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                        <div class="card">
                                            <div class="card-header p-3 pt-2">
                                                <div class="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                                                    <i class="material-icons opacity-10">person</i>
                                                </div>
                                                <div class="text-end pt-1">
                                                    <p class="text-sm mb-0 text-capitalize">Register Patients</p>
                                                    <h4 class="mb-0">{patientlist.length}</h4>
                                                </div>
                                            </div>
                                            <hr class="dark horizontal my-0" />
                                            <div class="card-footer p-3">
                                                <p class="mb-0"><span class="text-success text-sm font-weight-bolder">+3% </span>than last month</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>



                            </div >
                            <br></br>
                            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                    <h6 class="text-white text-capitalize ps-3">Patientlist</h6>
                                </div>
                            </div>
                            <div class="card-body px-0 pb-2">
                                <div class="table-responsive p-0">
                                    <table class="table align-items-center mb-0">
                                        <thead>
                                            <tr>
                                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Patient name</th>
                                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Email</th>
                                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Phonenumber</th>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                patientlist.map(doc => (
                                                    <>
                                                        <tr >
                                                            <td>
                                                                <div class="d-flex px-2 py-1">
                                                                    {/* <div>
                                                                        <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                                                                    </div> */}
                                                                    <div class="d-flex flex-column justify-content-center">
                                                                        <h6 class="mb-0 text-sm">{doc.fullname}</h6>
                                                                        <p class="text-xs text-secondary mb-0">{doc.role}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p class="text-xs font-weight-bold mb-0">{doc.email}</p>

                                                            </td>
                                                            <td>
                                                                <p class="text-xs font-weight-bold mb-0">{doc.phonenumber}</p>

                                                            </td>


                                                            {/* <td class="align-middle text-center text-sm">


                                                                <button onClick={Changedocstatus} class="btn" value={doc.email} style={{ backgroundColor: "lightgreen", borderRadius: "20px", color: "black" }} type="button" >✔</button>


                                                            </td>
                                                            <td class="align-middle text-center text-sm">


                                                                <button onClick={Changedocstatus} class="btn" value={doc.email} style={{ backgroundColor: "red", borderRadius: "20px", color: "black" }} type="button" >✘</button>


                                                            </td> */}

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
            <ToastContainer />
        </div>


    )
}

export default Displaypatient