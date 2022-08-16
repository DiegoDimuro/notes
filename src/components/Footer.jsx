import React from "react";

var d = new Date();
var currentYear = d.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Diego Dimuro &copy; {currentYear}</p>
    </footer>
  );
}

export default Footer;
