/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import Navbar from "components/Navbar.js";
import Header from "components/Header.js";
import Footer from "components/Footer.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <Navbar />
      <Header />
      <div className="main">
        <div id="siempre-fuertes" className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Siempre fuertes</h2>
                <h5 className="description">
                  Más de 30 años acompañando, informando y entreteniendo a los
                  habitantes de la Provincia del Choapa. Illapel FM mantiene un
                  compromiso de honestidad, calidad y hermandad con la
                  comunidad.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  onClick={(e) => e.preventDefault()}
                >
                  ¡Contáctanos!
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info d-flex flex-column h-100">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">La Señal Nº 1</h4>
                    <p className="description">
                      Más de 100 mil personas nos escuchan a diario.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info d-flex flex-column h-100">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">¡Impulsa tu negocio!</h4>
                    <p>
                      Más de 30 auspiciadores confían en nosotros mes a mes.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info d-flex flex-column h-100">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Precio y Calidad</h4>
                    <p>
                      En Illapel FM encontraras los mejores precios de
                      publicidad.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info d-flex flex-column h-100">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Máxima Cobertura</h4>
                    <p>
                      Nuestra Señal abarca Los Vilos, Illapel, Combarbalá y
                      Salamanca. Sin interrupción y todos los días.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="precios" className="section section-dark text-center">
          <Container>
            <h2 className="title">Precios</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar"></div>
                  <CardBody>
                    <div className="author">
                      <CardTitle tag="h4">Paquete Semanal</CardTitle>
                      <h6 className="card-category">8.000 Pesos</h6>
                    </div>
                    <p className="card-description text-center">
                      Acceso a una semana de frases promocionales en la
                      Provincia del Choapa. Coordina con nosotros tu fecha y
                      hora preferidas.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      onClick={(e) => e.preventDefault()}
                    ></Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      onClick={(e) => e.preventDefault()}
                    ></Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      onClick={(e) => e.preventDefault()}
                    ></Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar"></div>
                  <CardBody>
                    <div className="author">
                      <CardTitle tag="h4">Paquete Mensual</CardTitle>
                      <h6 className="card-category">30.000 Pesos</h6>
                    </div>

                    <p className="card-description text-center">
                      Incluye 160 frases promocionales, distribuidas de manera
                      equitativa las cuatro semanas de cada mes.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      onClick={(e) => e.preventDefault()}
                    ></Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      onClick={(e) => e.preventDefault()}
                    ></Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      onClick={(e) => e.preventDefault()}
                    ></Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar"></div>
                  <CardBody>
                    <div className="author">
                      <CardTitle tag="h4">Paquete Anual</CardTitle>
                      <h6 className="card-category">300.000 Pesos</h6>
                    </div>

                    <p className="card-description text-center">
                      Garantiza tu presencia mediatica en la región los 365 días
                      del año y obtén dos meses de publicidad gratis.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      onClick={(e) => e.preventDefault()}
                    ></Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      onClick={(e) => e.preventDefault()}
                    ></Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      onClick={(e) => e.preventDefault()}
                    ></Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="publicidad" className="section landing-section">
          <Container>
            <Row>
              <Col md="8" className="mx-auto">
                <h2 className="text-center">Publicita con Nosotros</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Nombre</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Nombre" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Correo</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Correo" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Mensaje</label>
                  <Input
                    placeholder="Cuéntanos tu idea de publicidad y la haremos realidad"
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col md="4" className="mx-auto">
                      <Button className="btn-fill" color="danger" size="lg">
                        Enviar
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
