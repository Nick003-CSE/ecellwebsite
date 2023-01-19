import React, { useState } from "react";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import "./Contact.css";
import { db } from "./firebaseconfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import TextField from '@mui/material/TextField';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [bodyError, setBodyError] = useState(false);

  const collectionRef = collection(db, "contact");

  const handleClick = (e) => {
    e.preventDefault();
    setNameError(false);
    setEmailError(false);
    setSubjectError(false);
    setBodyError(false);

    if (name === "") {
      setNameError(true);
    }
    if (email === "") {
      setEmailError(true);
    }
    if (subject === "") {
      setSubjectError(true);
    }
    if (body === "") {
      setBodyError(true);
    }
    if (name !== "" && email !== "" && subject !== "" && body !== "") {
      addDoc(collectionRef, {
        name: name,
        email: email,
        subject: subject,
        body: body,
        timestamp: serverTimestamp(),
      })
        .then(() => {
          console.log("data added successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <section id="contact-form" className="ftco-section">
      <div className="container" data-aos="fade-up">
        {/* <!-- <div class="row justify-content-center ">
                <div class="col-md-6 text-center mb-5 ">
                    <h2 class="heading-section ">Contact US</h2>
                </div>
            </div> --> */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-7 d-flex align-items-stretch">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Get in touch</h3>
                    <div id="form-message-warning" className="mb-4"></div>
                    <div id="form-message-success" className="mb-4">
                      Your message was sent, thank you!
                    </div>
                    <form id="contactForm" name="contactForm">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              id="name"
                              placeholder="Name"
                              onChange={(e) => setName(e.target.value)}
                              error={nameError}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Email"
                              onChange={(e) => setEmail(e.target.value)}
                              error={emailError}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                              onChange={(e) => setSubject(e.target.value)}
                              error={subjectError}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              name="message"
                              className="form-control"
                              id="message"
                              multiline
                              cols="30"
                              rows="3"
                              placeholder="Message"
                              onChange={(e) => setBody(e.target.value)}
                              error={bodyError}
                            />
                          </div>
                        </div>
                        <div className="col-md-12" style={{marginTop:"52px"}}>
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              className="btn"
                              onClick={handleClick}
                            />
                            <div className="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-5 d-flex align-items-stretch">
                  <div
                    className="info-wrap w-100 p-lg-5 p-4 d-flex flex-column justify-content-center"
                    data-aos="fade-up"
                    data-aos-offset="300"
                  >
                    {/* <!-- <h3 class="mb-4 mt-md-4">Contact us</h3> --> */}
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <LocationOnIcon />
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Address:</span> <br />
                          Veer Surendra Sai University of Technology, <br />{" "}
                          Burla , 768018
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <PhoneEnabledIcon />
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Phone:</span> <br />
                          <a href="tel://1234567920">+91 81440 64955</a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <MailIcon />
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Email:</span>{" "}
                          <a href="mailto:info@yoursite.com">
                            ecellvssut@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
