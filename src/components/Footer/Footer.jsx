import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-main bg-primary p-4">
      <div className="footer-text-area text-center">
        <Row className="footer-row align-items-center p-0 justify-content-between">
          <Col xs={12} sm={6} md={5} lg={4}>
            <ul className="contact-info-list">
              <li className="text-black">
                <FaEnvelope size={25} style={{ fill: "black" }} />
                <Link to="/"> &nbsp; {`todo@mail.com`}</Link>
              </li>
              <li>
                <FaMapMarkerAlt size={25} style={{ fill: "black" }} />
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  &nbsp; {`Norra Hamngatan 20, 411 06 Göteborg`}
                </a>
              </li>
              <li>
                <FaPhoneAlt size={25} style={{ fill: "black" }} /> &nbsp;
                {`070-766 44 22`}
              </li>
            </ul>
          </Col>
          <Col className="d-none d-lg-block">
            <div className="mx-auto text-black ">
              <h4>{`Todo this Todo that!`}</h4>
            </div>
          </Col>
          <Col xs={12} sm={6} md={5} lg={4}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagramSquare size={30} style={{ fill: "black" }} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare size={30} style={{ fill: "black" }} />
            </a>
            <a href="https://github.com/Denkaan" target="_blank" rel="noreferrer">
              <FaGithub size={30} style={{ fill: "black" }} />
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
