import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';



function Footer() {
  const copyright = <FontAwesomeIcon icon={faCopyright} />
  const laptop = <FontAwesomeIcon icon={faLaptop} />
  return (
    <footer className="footer">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-4">
          <Col md={3} sm={12}>
            Alexandre Viretti {laptop}
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3} >
            This site by made by Alexandre Viretti {copyright}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
