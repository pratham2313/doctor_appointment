import React from 'react'

import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";


function Card_doc() {
    const navigate = useNavigate();
    const location = useLocation();
    const [slot, setslot] = useState({ date: "", email: "", docname: "", slot1: "", slot2: "", slot3: "", slot4: "" });
    const [slottime, setslottime] = useState([]);
    const [tempdetails, settempdetails] = useState({ slot: "", docname: "" });
    var slotobj = { slot11: "", slot22: "", slot33: "", slot44: "" };
    const [datepicker, setdatepicker] = useState(false);
    // const [docinfofordatecard, setdocinfofordatecard] = useState([]);
    const [currentdate, setcurrentdate] = useState({ date: "" });
    var docemail = { email: "" };
    var datetimechecker = { email: "", date: "", docname: "" };
    const current = new Date();
    //var curTime = current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds();
    var curTime = current.getHours();
    console.log(curTime);
    var cdate = current.getDate();
    var cmonth = current.getMonth();
    if (cdate < 10) {
        cdate = `0${cdate}`

    }
    if (cmonth < 10) {
        cmonth = cmonth + 1;
        cmonth = `0${cmonth}`

    }
    const sdate = `${current.getFullYear()}-${cmonth}-${cdate}`;
    console.log(location.state);
    const [docinformation, setdoc] = useState(location.state.docinfo);
    // console.log(docinformation[0].fullname);

    async function callback(obj) {
        await axios.post("http://localhost:8080/getdatetime", obj).then((res) => {
            console.log("i am datetime check");
            var data = res.data.docinfo;


            if (data.slot1 == "true") {
                document.getElementById("slot2").setAttribute("disabled", true);

            }
            //console.log(data.slot2);
            if (data.slot2 == "true") {
                //console.log("in slot2 if");
                document.getElementById("slot2").setAttribute("disabled", true);
            }
            if (data.slot3 == "true") {
                document.getElementById("slot3").setAttribute("disabled", true);
            }
            if (data.slot4 == "true") {
                document.getElementById("slot4").setAttribute("disabled", true);
            }
            if (data.slot1 == "false") {
                if (curTime > 9) {
                    //console.log("in if 1");
                    document.getElementById("slot1").setAttribute("disabled", true);
                }
                else {
                    document.getElementById("slot1").removeAttribute("disabled");
                }
                //console.log(document.getElementById("slot1"));
                // document.getElementById("slot1").setAttribute("disabled", false);

            }
            if (data.slot2 == "false") {
                if (curTime > 11) {
                    document.getElementById("slot2").setAttribute("disabled", true);
                }
                else {
                    document.getElementById("slot2").removeAttribute("disabled");
                }
                ///console.log(document.getElementById("slot2"));
                //document.getElementById("slot2").setAttribute("disabled", false);

            }
            if (data.slot3 == "false") {
                if (curTime > 16) {
                    document.getElementById("slot3").setAttribute("disabled", true);
                }
                else {
                    document.getElementById("slot3").removeAttribute("disabled");
                }
                //console.log(document.getElementById("slot3"));
                //document.getElementById("slot3").setAttribute("disabled", false);

            }
            if (data.slot4 == "false") {
                if (curTime > 18) {
                    document.getElementById("slot4").setAttribute("disabled", true);
                    document.getElementById("hiddenatr").removeAttribute("hidden");
                }
                else {
                    document.getElementById("slot4").removeAttribute("disabled");
                }
                //console.log(document.getElementById("slot4"));
                //document.getElementById("slot4").setAttribute("disabled", false);

            }

            setslot(data);

        });
    }
    async function bookdocappo(e) {
        setdatepicker(false);
        // console.log("i am call");
        docemail.email = e.target.value;
        await axios.post("http://localhost:8080/finddocemail", docemail).then((res) => {
            console.log(res.data.docinfo);
            var data = res.data.docinfo;
            const sdate1 = `${current.getFullYear()}-${cmonth}-${cdate}`;
            datetimechecker.email = data[0].email;
            datetimechecker.date = sdate1;
            datetimechecker.docname = data[0].docname;
            callback(datetimechecker);
            setslottime(data);
            //setdatepicker(false);
            setdatepicker(true);

        });
        // // console.log(docemail.email);
        // navigate("/datetimepicker", { state: { docmail: docemail.email } });

    }

    const handleinput = async (e) => {
        var temp = { docname: "", slot: "" };
        if (e.target.name == "slot1") {
            settempdetails({ slot: "9:00 am", docname: slottime[0].fullname });
            temp.docname = slottime[0].fullname;
            temp.slot = "9:00 am";
        }
        if (e.target.name == "slot2") {
            settempdetails({ slot: "11:00 am", docname: slottime[0].fullname });
            temp.docname = slottime[0].fullname;
            temp.slot = "11:00 am";
        }
        if (e.target.name == "slot3") {
            settempdetails({ slot: "4:00 pm", docname: slottime[0].fullname });
            temp.docname = slottime[0].fullname;
            temp.slot = "4:00 pm";
        }
        if (e.target.name == "slot4") {
            settempdetails({ slot: "6:00 pm", docname: slottime[0].fullname });
            temp.docname = slottime[0].fullname;
            temp.slot = "6:00 pm";
        }
        setslot({ ...slot, [e.target.name]: e.target.value });
        setslot({ ...slot, ...temp })

    }
    const handleinput1 = async (e) => {
        datetimechecker.email = slot.email;
        datetimechecker.date = e.target.value;
        datetimechecker.docname = slot.docname;
        await axios.post("http://localhost:8080/getdatetime", datetimechecker).then((res) => {
            console.log(res.data.docinfo);
            var data = res.data.docinfo;
            if (data.slot1 == "true") {
                document.getElementById("slot2").setAttribute("disabled", true);
            }
            if (data.slot2 == "true") {
                //console.log("in slot2 if");
                document.getElementById("slot2").setAttribute("disabled", true);
            }
            if (data.slot3 == "true") {
                document.getElementById("slot3").setAttribute("disabled", true);
            }
            if (data.slot4 == "true") {
                document.getElementById("slot4").setAttribute("disabled", true);
            }


            // false part
            if (data.slot1 == "false") {

                //console.log(document.getElementById("slot1"));
                document.getElementById("slot1").removeAttribute("disabled", false);

            }
            if (data.slot2 == "false") {

                ///console.log(document.getElementById("slot2"));
                document.getElementById("slot2").removeAttribute("disabled", false);

            }
            if (data.slot3 == "false") {

                //console.log(document.getElementById("slot3"));
                document.getElementById("slot3").removeAttribute("disabled", false);

            }
            if (data.slot4 == "false") {

                //console.log(document.getElementById("slot4"));
                document.getElementById("slot4").removeAttribute("disabled", false);

            }
            setslot(data);
        });

    };
    const submit = (e) => {
        navigate("/appointment", { state: { slotinfo: slot } });
    }

    return (
        <div >
            <div>
                <Header />
                <div style={{ marginTop: "20px", marginBottom: "20px", }} class="container">
                    <div>
                        <div class="row">

                            {
                                docinformation.map(doc => (
                                    <>


                                        <div class="col-lg-4">
                                            <div class="card card-margin" >

                                                <div class="card-header no-border">
                                                    <h3 class="card-title " style={{ textTransform: 'uppercase' }}>Dr.{doc.fullname}</h3>
                                                </div>
                                                <div class="card-body pt-0">
                                                    <div class="widget-49">
                                                        <div class="widget-49-title-wrapper">
                                                            <div class="widget-49-date-primary">
                                                                <span class="widget-49-date-day">Email : {doc.email}</span>
                                                                {/* <span class="widget-49-date-month">apr</span> */}
                                                            </div>
                                                            <div class="widget-49-meeting-info">
                                                                <span class="widget-49-pro-title"></span>
                                                                <span class="widget-49-meeting-time">Speciality : {doc.specialty}</span>
                                                            </div>
                                                        </div>
                                                        <ol class="widget-49-meeting-points">
                                                            <li class="widget-49-meeting-item"><span>{doc.specialty}</span></li>
                                                            <li class="widget-49-meeting-item"><span>Data migration is in scope</span></li>
                                                            <li class="widget-49-meeting-item"><span>Session timeout increase to 30 minutes</span></li>
                                                        </ol>
                                                        <div class="widget-49-meeting-action">
                                                            <button onClick={bookdocappo} style={{ fontSize: "20px", color: "Blue" }} class="btn btn-sm btn-flash-border-primary" value={doc.email}>Book</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    </>
                                ))
                            }
                            {
                                datepicker ? (
                                    <>
                                        <div style={{ marginTop: "50px", borderStyle: "groove" }} >

                                            <butoon class="btn btn-outline-danger" onClick={() => setdatepicker(false)}>X</butoon>

                                            <h3 class="text-black" style={{ color: "black", textAlign: "center" }}>Select date and time</h3>
                                            <h6 class="text-black" style={{ color: "black", textAlign: "center" }}>Dr.{slottime[0].fullname}</h6>
                                            <div class="row py-6">
                                                <div class="col">
                                                    <form>
                                                        <div class="date" id="date1" data-target-input="nearest">

                                                            <form action="">
                                                                <input type="date" name="date" class="form-control bg-light border-0 " onChange={(e) => handleinput1(e)}
                                                                    min={sdate} style={{ height: "55px" }} />

                                                            </form>
                                                        </div>
                                                    </form>

                                                </div>

                                                <div class="col" style={{ paddingRight: "20px" }}>
                                                    <div class="row" >
                                                        <div class="col-md-3  text-center"><button id="slot1" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => handleinput(e)} name='slot1' class="btn btn-dark py-3" type="submit" value="true">{slottime[0].slot1time}</button></div>
                                                        <div class="col-md-3 text-center"><button id="slot2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => handleinput(e)} name='slot2' class="btn btn-dark py-3" type="submit" value="true">{slottime[0].slot2time}</button></div>
                                                        <div class="col-md-3 text-center"><button id="slot3" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => handleinput(e)} name='slot3' class="btn btn-dark py-3" type="submit" value="true">{slottime[0].slot3time}</button></div>
                                                        <div class="col-md-3 text-center"><button id="slot4" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => handleinput(e)} name='slot4' class="btn btn-dark py-3" type="submit" value="true">{slottime[0].slot4time}</button></div>
                                                        <p id='hiddenatr' hidden class="text-center text-danger">Today appointtment time is over check out after tommorrow 9 am </p>
                                                    </div>

                                                </div>


                                            </div>
                                            {/* <div class="text-center">
                                                <button class="btn btn-dark py-3" type="button" data-toggle="modal" data-target="#exampleModal">Make Appointment</button>
                                            </div> */}

                                        </div>
                                    </>
                                ) : null
                            }
                            {/* <!-- Button trigger modal --> */}
                            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Launch demo modal
                            </button> */}

                            {/* <!-- Modal --> */}
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Your Selection</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>DoctorName :{tempdetails.docname} </p>
                                            <p>AppointmentDate : {slot.date}</p>
                                            <p>AppointmentTime : {tempdetails.slot}</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                            <button onClick={(e) => submit(e)} type="button" class="btn btn-dark " data-bs-dismiss="modal">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div style={{ position: "relative", top: "162px", bottom: "0", left: "0", right: "0" }}><Footer /></div>

        </div>

    )
}

export default Card_doc