import { Row, Col } from "react-bootstrap"


const CompactFooter = () =>{

    return(
        <>
        
          <Row className="mx-5 my-2">
            <Col className="px-1">
            <span className="footer-link-compact">
              About
            </span>
            </Col>
            <Col className="px-1">
            <span className="footer-link-compact">
            Accessibility            </span>
            </Col>
            <Col className="px-1">
            <span className="footer-link-compact">
              Help Center
            </span>
            </Col>
            <Col className="px-1">
            <span className="d-flex footer-link-compact">
            Privacy & Terms <i class="bi bi-chevron-down"></i>
            </span>
            </Col>
            <Col className="px-1">
            <span className="footer-link-compact">
              Ad Choices
            </span>
            </Col>
            <Col className="px-1">
            <span className="footer-link-compact">
            advertising  
            </span>
            </Col>
            <Col className="px-1">
            <span className="footer-link-compact">
              Business Services <i className="bi bi-chevron-down"></i>
            </span>
            </Col>
            <Col className="px-1">
            <span className="footer-link-compact">
              Get the LinkedIn App
            </span>
            </Col>
            <Col className="px-1">
            <span className="footer-link-compact">
              More
            </span>
            </Col>
          </Row>
        
        </>
    )
}

export default CompactFooter