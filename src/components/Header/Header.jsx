import * as React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen((current) => !current);

  const currentWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState(
    currentWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(currentWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid id="navbar" className="mb-3">
      <Row className="m-auto text-center">
        {windowDimensions.width < 768 ? (
          <div>
            <div className="d-flex justify-content-end">
              {isOpen ? (
                <></>
              ) : (
                <GiHamburgerMenu
                  size={40}
                  className="hamburger"
                  onClick={handleOpen}
                />
              )}
            </div>
            <div className="d-flex justify-content-end">
              {isOpen ? (
                <div className="hamburger-open">
                  <Col className="flex-column hamburger-items">
                    <Col
                      className="d-flex justify-content-end"
                      style={{ padding: "10px 10px 0 0" }}
                    >
                      <ImCross
                        size={25}
                        className="hamburger"
                        onClick={handleOpen}
                      />
                    </Col>
                    <Col>
                      <a href="/main">{`Hem`}</a>
                    </Col>
                    <Col>
                      <a href="/add">{`Lägg till`}</a>
                    </Col>
                    <Col>
                      <a href="/">{`Logga ut`}</a>
                    </Col>
                  </Col>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        ) : (
          <Col xs={10} lg={8} className="d-flex m-auto">
            <Col>
              <span>
                <Nav.Link href="/main">{`Hem`}</Nav.Link>
              </span>
            </Col>
            <Col>
              <span>
                <Nav.Link href="/add">{`Lägg till`}</Nav.Link>
              </span>
            </Col>
            <Col>
              <span>
                <Nav.Link href="/">{`Logga ut`}</Nav.Link>
              </span>
            </Col>
          </Col>
        )}
      </Row>
    </Container>
  );
}
