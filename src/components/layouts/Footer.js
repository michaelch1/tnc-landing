import React from "react";

function Footer() {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-left">
            Copyright © Tech Neural Cyber 2020
          </div>
          <div className="col-lg-4 my-3 my-lg-0">
            <a className="btn btn-dark btn-social mx-2" href="#!">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-dark btn-social mx-2" href="#!">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-dark btn-social mx-2" href="#!">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div className="col-lg-4 text-lg-right">
            <p>We rise together!</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
