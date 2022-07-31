import React from "react";
import "./style.css";
const ContactEmail = () => {
  return (
    <>
      <div className="contact-wrap">
        <div className="mail-text-wrap">
          <p>
            Feel free to reach out if you wanna work with me, or simply
            have a chat
          </p>
        </div>
        <div className="mail-wrap">
          <button className="contact-mail">
            <a href="mailto:aman34503@gmail.com">
              aman345030@gmail.com
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactEmail;
