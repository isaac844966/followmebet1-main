import React, { useState } from "react";
import Phone from "../images/phone5.png";
import Email from "../images/envelope.svg";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrapper/Contact";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [formState, setFormState] = useState({});
  const changeHnandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
 try {
   const config = {
    SecureToken: "7d51bd1e-6127-4b26-8173-ede8602b6a2b",
    To: "Support@followmebet.com.ng",
    From: formState.email,
    Subject: `${formState.subject}`,
    Body: `${formState.name}   `,
   };
   if (window.Email) {
    window.Email.send(config);
    toast.success('Message sent successfully');
  }
 } catch (error) {
 toast.error('there was an error sening your message')
 }
    
    
    setFormState({
      name: "",
      message: "",
      subject: "",
      email: "",
    });
  };

  return (
    <>
       <Helmet>
        <title>FollowMeBet- For more information you can contact us Now</title>
        <meta name="description" content="Contact us now and get more informations"/>
        <link rel="canonical" href="/contact"/>
      </Helmet>
      <Wrapper>
      <div className="contact">
        <div className="left">
          <h1>Contact us today</h1>
          <img src={Phone} alt="phone" title="Email us For more information " loading="lazy"  />
        </div>
        <div className="right">
          <p>
            Please feel free to use the form below to get in touch with us or
            contact us directly through our emails:
          </p>
          <div className="Email">
            <img src={Email} alt="email" title="Email us For more information " loading="lazy" />
            <div className="address">
              <h2>Email ADDRESS</h2>
              <p>Support@followmebet.com.ng,</p>
              <p>info@followmebet.com.ng</p>
            </div>
          </div>
          <form onSubmit={sendEmail}>
            <div className="input">
              <div className="container-input">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formState.name || ""}
                  onChange={changeHnandler}
                />
              </div>
              <div className="container-input">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formState.email || ""}
                  onChange={changeHnandler}
                />
              </div>
            </div>
            <div className="container-input">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formState.subject || ""}
                onChange={changeHnandler}
              />
            </div>
            <div className="container-input">
              <label>Messgae</label>
              <textarea
                htmlFor="message"
                name="message"
                value={formState.message || ""}
                onChange={changeHnandler}
                rows="4"
                cols="20"
                required
              ></textarea>
              <button type="submit" value="Send Email">
                Send Message
              </button>
            </div>
          </form>
        </div>
        </div>
        </Wrapper>
    </>
  );
};

export default Contact;


