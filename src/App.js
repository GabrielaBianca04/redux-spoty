
import './App.css';
import Playlist from './components/Playlist';
import Sidebar from './components/Sidebar';
import {Row,Col} from "react-bootstrap";


function App() {
  return (
    <div className="App">
      <Row>
        <Col> <Sidebar/></Col>
        <Col>
        <Row><Playlist titleOf="Rock Classics"/></Row>
        
        <Row><Playlist titleOf="Pop Culture"/></Row>

        <Row><Playlist titleOf="Hip Hop"/></Row>
        </Col>
      </Row>
     
    </div>
  );
}

export default App;
