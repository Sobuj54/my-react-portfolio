import { useEffect, useRef, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Contact.scss";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_emailjs_service_ID,
        import.meta.env.VITE_template_ID,
        form.current,
        import.meta.env.VITE_public_KEY
      )
      .then(
        (result) => {
          toast.success("Your email has been sent !", {
            position: toast.POSITION.TOP_LEFT,
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Sorry! Email is not sent.", {
            position: toast.POSITION.TOP_LEFT,
          });
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Sobuj | Contact</title>
      </Helmet>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am interested in full-time or part-time job as well as freelance
            opportunities. However, if you have any other requests or questions,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Islam Nagar,
          <br />
          Matuail,
          <br />
          Jatrabari, Dhaka <br />
          <br />
          <span>sobujahmed124@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[23.698132714904357, 90.46327056772509]}
            zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[23.698132714904357, 90.46327056772509]}>
              <Popup>Sobuj Lives Here . Come Here if you need me.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
