import React from "react";
import { Link } from "react-router-dom";

function SellerFooter(props) {
  return (
    <div className="footer1">
      <footer className="section footer-variant-2 footer-modern context-dark section-top-image section-top-image-dark">
        <div className="footer-variant-2-bottom-panel">
          <div className="container">
            <div className="group-sm group-sm-justify">
              <p className="rights">
                <span>&copy;&nbsp;</span>
                <span className="copyright-year"></span>{" "}
                <span>Fine Living</span>. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SellerFooter;
