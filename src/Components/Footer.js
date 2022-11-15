import React from "react";
import metaFooter from "../Images/Home/footer/metafooter.png";
import footerFacebook from "../Images/Home/footer/facebook.png";
import footerInsta from "../Images/Home/footer/insta.png";
import footerTwitter from "../Images/Home/footer/twitter.png";
import footerCopyright from "../Images/Home/footer/copyright.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logos">
        <img src={metaFooter} />
        <div>
          <img src={footerFacebook} />
          <img src={footerInsta} />
          <img src={footerTwitter} />
        </div>
        <img src={footerCopyright} />
      </div>

      <div className="footer-content">
        <div className="community">
            <p>Community</p>
            <p>NFT</p>
            <p>Tokens</p>
            <p>Landlords</p>
            <p>Discord</p>
        </div>
        <div className="places">
            <p>Places</p>
            <p>Castle</p>
            <p>Farms</p>
            <p>Beach</p>
            <p>Learn more</p>
        </div>
        <div className="about-us">
            <p>About us</p>
            <p>Road map</p>
            <p>Creators</p>
            <p>Career</p>
            <p>Contact us</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
