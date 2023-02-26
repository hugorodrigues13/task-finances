import { Col, Row } from "antd";
import { CalendarBlank, CalendarPlus, Handshake, SelectionBackground, ThumbsDown, ThumbsUp } from "phosphor-react";
import React from "react";
import {Container} from "./styles"

  
const Cliente: React.FC = () => {
    return (
      <Container>
        <Row gutter={24}>
        <div>
        <Col className="quadrado">
          <CalendarBlank size={32} className="icons"/>
        </Col>
          <Row className="retangulo">
              
          </Row>
          
        </div>

        <div>
        <Col className="quadrado2">
        <Handshake size={32} className="icons"/>
            </Col>
        <Row className="retangulo">
            
        </Row>
      
        </div>

        <div>
          <Col className="quadrado3">
          <CalendarPlus size={32} className="icons" />
          </Col>
          <Row className="retangulo">
            
          </Row>
          
        </div>

        <div>
            <Col className="quadrado4">
            <ThumbsDown size={32} className="icons"/>
            </Col>
          <Row className="retangulo">

          </Row>
              
        </div>
        </Row>
      </Container>
    );
  }
  
  export default Cliente;
  