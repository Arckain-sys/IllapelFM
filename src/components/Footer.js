import React from "react";
import { Row, Container } from "reactstrap";
import ReactAudioPlayer from "react-audio-player";

function Footer() {
  const screenWidth = window.innerWidth; // Get screen width on component mount

  return (
    <footer
      className="footer footer-black footer-white"
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "50px", // Adjust height as needed
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        zIndex: "1000",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a
                  href="https://www.creative-tim.com?ref=pkr-footer"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: "16px", color: "red" }}
                >
                  EN VIVO
                </a>
                <ReactAudioPlayer
                  style={{ margin: "0 0 3px 0px", paddingLeft: "12px", height: "36px" }}
                  src="https://audio.streaminghd.cl:2000/stream/9080/stream"
                  autoPlay
                  controls
                />
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto" style={{ display: screenWidth < 768 ? 'none' : 'block' }}>
            <span className="copyright">
              © {new Date().getFullYear()}, Radio Illapel FM - Todos los derechos reservados
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
