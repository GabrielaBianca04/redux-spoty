
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import img from "../assets/logo.png";
import {Nav} from "react-bootstrap";

import Button from "react-bootstrap/esm/Button";
import { Search } from "react-bootstrap-icons";

const Sidebar= () => {

        
return(
    <Nav className="bg-dark">
        
        <Row>
            <Col>
            <img src={img} alt="logo"/>
            </Col>
        </Row>

        <Row>
            <Col>
            <Row>
            <ul>
                <li> <Nav.Link href="#home">Home</Nav.Link></li>
                <li> <Nav.Link href="#home">Your Library</Nav.Link></li>
            </ul>
            </Row>

            <Row>
            {Search}
            </Row>
            </Col>
        </Row>

        <Row>
            <Col>
            <Button variant="light">Sign Up</Button>{' '}
      <Button variant="dark">Login</Button>{' '}
      <p>Cookie policy | Privacy</p>
            </Col>
        </Row>
    </Nav>
)
}



export default Sidebar