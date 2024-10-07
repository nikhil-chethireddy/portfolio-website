import { useState } from "react";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import "./contact.css";

const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.fullname ||
      !formData.email ||
      !formData.number ||
      !formData.subject ||
      !formData.message
    )
      return;

    try {
      const data = {
        ...formData,
        access_key: ACCESS_KEY,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
        throw new Error(res.error);
      }
    } catch (error) {
      console.error("Error:", error);
      setIsSuccess(false);
    } finally {
      setFormData({
        fullname: "",
        email: "",
        number: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group-1">
          <div className="input-box">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={(e) =>
                setFormData({ ...formData, fullname: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="input-box">
            <input
              type="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={(e) =>
                setFormData({ ...formData, number: e.target.value })
              }
            />
            <input
              type="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />
          </div>
        </div>
        <div className="input-group-2">
          <textarea
            placeholder="Your Message"
            cols="30"
            rows="10"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <button type="submit" className="btn">
            {isSuccess === null ? (
              "Send Message"
            ) : isSuccess ? (
              <>
                Sent <FaCheckCircle className="icon" />{" "}
              </>
            ) : (
              <>
                Failed <FaExclamationTriangle className="icon" />{" "}
              </>
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
