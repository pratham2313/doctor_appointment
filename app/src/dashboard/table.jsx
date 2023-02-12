
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Table = () => {
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
    // function getdocpdf() {
    //     console.log("get mail called");
    //     console.log(docemail);
    // }




    return (
        <div>
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
                                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Author</th>
                                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
                                                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                                                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employed</th>
                                                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Doc.Document</th>
                                                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Verified</th>
                                                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Delete</th>
                                                <th class="text-secondary opacity-7"></th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                doclist.map(doc => (
                                                    <>
                                                        <tr >
                                                            <td>
                                                                <div class="d-flex px-2 py-1">
                                                                    <div>
                                                                        <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                                                                    </div>
                                                                    <div class="d-flex flex-column justify-content-center">
                                                                        <h6 class="mb-0 text-sm">{doc.fullname}</h6>
                                                                        <p class="text-xs text-secondary mb-0">{doc.email}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p class="text-xs font-weight-bold mb-0">{doc.specialty}</p>
                                                                <p class="text-xs text-secondary mb-0">Organization</p>
                                                            </td>
                                                            <td class="align-middle text-center text-sm">
                                                                <span class="badge badge-sm bg-gradient-secondary">{doc.role}</span>
                                                            </td>
                                                            <td class="align-middle text-center">
                                                                <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
                                                            </td>
                                                            <td class="align-middle">
                                                                {/* <a onClick={getdocpdf()} class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                                    showpdf
                                                                </a> */}


                                                                <button onClick={getdocpdf} class="btn btn-dark" type="button" value={doc.email}>show pdf</button>


                                                                {/* <div class="col-5">
                                                                    <button onClick={getdocpdf} class="btn btn-dark " type="button" value={doc.email}>show pdf</button>
                                                                </div> */}
                                                            </td>
                                                            <td class="align-middle">


                                                                <button onClick={Changedocstatus} class="btn" value={doc.email} style={{ backgroundColor: "lightgreen", borderRadius: "20px", color: "black" }} type="button" >✔</button>


                                                            </td>
                                                            <td class="align-middle ml">


                                                                <button onClick={Changedocstatus} class="btn" value={doc.email} style={{ backgroundColor: "red", borderRadius: "20px", color: "black" }} type="button" >✘</button>


                                                            </td>

                                                        </tr>
                                                    </>
                                                ))



                                            }


                                            {/* <tr>
                                                <td>
                                                    <div class="d-flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-3.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user2" />
                                                        </div>
                                                        <div class="d-flex flex-column justify-content-center">
                                                            <h6 class="mb-0 text-sm">Alexa Liras</h6>
                                                            <p class="text-xs text-secondary mb-0">alexa@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p class="text-xs font-weight-bold mb-0">Programator</p>
                                                    <p class="text-xs text-secondary mb-0">Developer</p>
                                                </td>
                                                <td class="align-middle text-center text-sm">
                                                    <span class="badge badge-sm bg-gradient-secondary">Offline</span>
                                                </td>
                                                <td class="align-middle text-center">
                                                    <span class="text-secondary text-xs font-weight-bold">11/01/19</span>
                                                </td>
                                                <td class="align-middle">
                                                    <a href="/#" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                        Edit
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="d-flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-4.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user3" />
                                                        </div>
                                                        <div class="d-flex flex-column justify-content-center">
                                                            <h6 class="mb-0 text-sm">Laurent Perrier</h6>
                                                            <p class="text-xs text-secondary mb-0">laurent@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p class="text-xs font-weight-bold mb-0">Executive</p>
                                                    <p class="text-xs text-secondary mb-0">Projects</p>
                                                </td>
                                                <td class="align-middle text-center text-sm">
                                                    <span class="badge badge-sm bg-gradient-success">Online</span>
                                                </td>
                                                <td class="align-middle text-center">
                                                    <span class="text-secondary text-xs font-weight-bold">19/09/17</span>
                                                </td>
                                                <td class="align-middle">
                                                    <a href="/#" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                        Edit
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="d-flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-3.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user4" />
                                                        </div>
                                                        <div class="d-flex flex-column justify-content-center">
                                                            <h6 class="mb-0 text-sm">Michael Levi</h6>
                                                            <p class="text-xs text-secondary mb-0">michael@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p class="text-xs font-weight-bold mb-0">Programator</p>
                                                    <p class="text-xs text-secondary mb-0">Developer</p>
                                                </td>
                                                <td class="align-middle text-center text-sm">
                                                    <span class="badge badge-sm bg-gradient-success">Online</span>
                                                </td>
                                                <td class="align-middle text-center">
                                                    <span class="text-secondary text-xs font-weight-bold">24/12/08</span>
                                                </td>
                                                <td class="align-middle">
                                                    <a href="/#" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                        Edit
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="d-flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user5" />
                                                        </div>
                                                        <div class="d-flex flex-column justify-content-center">
                                                            <h6 class="mb-0 text-sm">Richard Gran</h6>
                                                            <p class="text-xs text-secondary mb-0">richard@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p class="text-xs font-weight-bold mb-0">Manager</p>
                                                    <p class="text-xs text-secondary mb-0">Executive</p>
                                                </td>
                                                <td class="align-middle text-center text-sm">
                                                    <span class="badge badge-sm bg-gradient-secondary">Offline</span>
                                                </td>
                                                <td class="align-middle text-center">
                                                    <span class="text-secondary text-xs font-weight-bold">04/10/21</span>
                                                </td>
                                                <td class="align-middle">
                                                    <a href="/#" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                        Edit
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="d-flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-4.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user6" />
                                                        </div>
                                                        <div class="d-flex flex-column justify-content-center">
                                                            <h6 class="mb-0 text-sm">Miriam Eric</h6>
                                                            <p class="text-xs text-secondary mb-0">miriam@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p class="text-xs font-weight-bold mb-0">Programator</p>
                                                    <p class="text-xs text-secondary mb-0">Developer</p>
                                                </td>
                                                <td class="align-middle text-center text-sm">
                                                    <span class="badge badge-sm bg-gradient-secondary">Offline</span>
                                                </td>
                                                <td class="align-middle text-center">
                                                    <span class="text-secondary text-xs font-weight-bold">14/09/20</span>
                                                </td>
                                                <td class="align-middle">
                                                    <a href="/#" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                        Edit
                                                    </a>
                                                </td>
                                            </tr> */}
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

export default Table