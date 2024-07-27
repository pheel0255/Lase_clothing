import React, { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = ({ data }) => {
  console.log(data);
  const [{ name, email, message }, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_x8c4kz5",
        "template_tc9jhxo",
        e.target,
        "oQaPajsk8I_gVYZ06"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          clearState();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="col-md-8">
          <div className="row">
            <div className="section-title">
              <h2>Get In Touch</h2>
              <p>
                Please fill out the form below to send us an email and we will
                get back to you as soon as possible.
              </p>
            </div>
            <form name="sentMessage" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      value={name}
                      onChange={handleChange}
                      required
                      aria-label="Name"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={handleChange}
                      required
                      aria-label="Email"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Message"
                  value={message}
                  onChange={handleChange}
                  required
                  aria-label="Message"
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <button
                type="submit"
                className="btn btn-custom btn-lg"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-3 col-md-offset-1 contact-info">
          <div className="contact-item">
            <h3>Contact Info</h3>
            <p>
              <span>
                <i className="fa fa-map-marker"></i> Address: <br />
                Abuja FCT Nigeria
                {data ? data.address : "loading"}
              </span>
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <i className="fa fa-phone"></i> Phone: <br />
                +234 8157050147
              </span>
              {data ? data.phone : "loading"}
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <i className="fa fa-envelope-o"></i> Email: <br />
                tobatolu14@gmail.com
              </span>
              {data ? data.email : "loading"}
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <i className="fa fa-instagram"></i> Instagram: <br />
                lase__clothing
              </span>
              {data ? data.email : "loading"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
