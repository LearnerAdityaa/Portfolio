import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer bg-black text-white py-4 text-center">
        <div className="row space-x-10" style={{ fontSize: "30px" }}>
          <a
            href="https://www.linkedin.com/in/aditya-chaudhary-7027a9212/"
            target="blank"
            className="hover:text-gray-400"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/LearnerAdityaa"
            target="blank"
            className="hover:text-gray-400"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://x.com/Aditya__Learner?t=ocjBPuielo6Gbf_Gj2s7Yg&s=09"
            target="blank"
            className="hover:text-gray-400"
            aria-label="Twitter"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>

        <div className="row mt-2">
          <p>
            MERN-stack Developer based in Nepal, specializing in web and
            software development.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
