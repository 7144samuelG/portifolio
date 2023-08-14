import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/Samuelgichukilu">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/salu._g">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/samuel-njoki-642a23203/">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="mailto:samutech14@gmail.com">
          <SiGmail />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
