import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="block bg-[#1a1a1f] bottom-0">
      <div className="footer py-7 px-7 bg-[#1a1a1f] w-full flex flex-col sm:flex-row sm:justify-around sm:items-start relative">
        <div className="footer-left p-2.5 text-center sm:text-left">
          <h3 className="text-[#ee046d]">
            <FontAwesomeIcon
              icon={faGem}
              fade
              style={{ color: "#ee046d", height: "30px", width: "30px" }}
            />
            <b className="text-2xl"> Next Virtual World</b>
          </h3>
          <br />
          <a
            className="text-white p-3 rounded-md hover:bg-[#ee046d] transition-colors duration-700 ease-in-out no-underline inline-block"
            href="mailto:nextvr@gmail.com"
          >
            nextvr@gmail.com
          </a>
        </div>

        <div className="footer-center p-2.5 text-center sm:text-left">
          <ul className="list-none space-y-2">
            <li>
              <a
                href="tel:+2349071793324"
                className="text-white hover:text-[#ee046d]"
              >
                +234 907 179 3324
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#ee046d]">
                Help
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-[#ee046d]">
                About Us
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-right p-2.5 text-center sm:text-left">
          <ul className="list-none space-y-2">
            <li>
              <Link to="/" className="text-white hover:text-[#ee046d]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/tech" className="text-white hover:text-[#ee046d]">
                Tech
              </Link>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#ee046d]">
                Products
              </a>
            </li>
            <li>
              <Link to="/login" className="text-white hover:text-[#ee046d]">
                Sign Up <br />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <p className=" obi text-center text-gray-400 text-2xl pb-2.5 ">
        © 2024 Next Virtual World. All rights reserved.
      </p>
    </footer>
  );
}
export default Footer;
