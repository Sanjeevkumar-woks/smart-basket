import "./Footer.css";

import { Link, useLocation } from "react-router-dom";

import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  const location = useLocation();
  if (location.pathname === "/404") {
    return null;
  }
  return (
    <div
      className="FooterContainer"
      style={{ display: location?.pathname?.includes("/s") ? "none" : "block" }}
    >
      <div className="FooterHorizontalLine"></div>
      <div className="FooterWrapperContainer">
        <div className="FooterAboutUsContainer">
          <div className="FooterAboutUsHeader">About Us</div>
          <div className="FooterAboutUsText">
            Shop on the go and get anything delivered in minutes. Buy everything
            from groceries to fresh fruits & vegetables, cakes and bakery items,
            to meats & seafood.
          </div>
          <ul className="FooterAboutUsLinks">
            <li>
              <Link
                className="FooterAboutUsLink"
                to="https://github.com/Sanjeevkumar-woks"
                target="_blank"
              >
                <BsGithub />
              </Link>
            </li>
            <li>
              <Link
                className="FooterAboutUsLink"
                to="https://www.linkedin.com/in/sanjeevkumar-managutti-34187a207/"
                target="_blank"
              >
                <BsLinkedin />
              </Link>
            </li>
          </ul>
        </div>
        <div className="FooterUsefulLinksContainer">
          <div className="FooterUserfulLinksWrapper">
            <div className="FooterUsefulLinksHeader">Useful Links</div>
            <ul className="FooterUsefulLinks">
              <li className="FooterLink">About</li>
              <li className="FooterLink">Blog</li>
              <li className="FooterLink">Privacy</li>
              <li className="FooterLink">Terms</li>
              <li className="FooterLink">FAQs</li>
            </ul>
          </div>
        </div>
        <div className="FooterNewsLetterContainer">
          <div className="FooterNewsLetterHeader">Newsletter</div>
          <input
            className="FooterNewsLetterinput"
            placeholder="Enter Your Email"
          />
          <div className="FooterNewsLetterbutton">Subscribe</div>
        </div>
      </div>
      <div className="FooterCopyRight">
        © Samart-Basket Commerce Private Limited , 2016-2023
      </div>
    </div>
  );
}
