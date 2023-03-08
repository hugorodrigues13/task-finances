import { Col, Row } from "antd";
import { CalendarBlank, CalendarPlus, Handshake, SelectionBackground, ThumbsDown, ThumbsUp } from "phosphor-react";
import React from "react";
import {Container} from "./styles"

  
const BoxAll: React.FC = () => {
    return (
      <Container>
        <Row gutter={24} className="boxAll">
            <div>
              <Col className="quadrado">
                <CalendarBlank size={32} className="icons"/>
              </Col>
              
              <Row className="retangulo">
                <p className="title">A Receber Hoje</p>
                <div className="preco">R$ 50000,00</div>
              </Row>
            
            </div>

        <div>
        <Col className="quadrado2">
        <Handshake size={32} className="icons"/>
            </Col>
        <Row className="retangulo">
        <p className="title">Receb. em Atraso</p>
        <div className="preco">R$ 00</div>
        </Row>
      
        </div>

        <div>
          <Col className="quadrado3">
          <CalendarPlus size={32} className="icons" />
          </Col>
          <Row className="retangulo">
          <p className="title">A Pagar Hoje</p>
          <div className="preco">R$ 50000,00</div>
          </Row>
          
        </div>

        <div>
            <Col className="quadrado4">
            <ThumbsDown size={32} className="icons"/>
            </Col>
          <Row className="retangulo">
              <p className="title">Pagtos em Atraso</p>
              <div className="preco">R$ 50000,00</div>
          </Row>
              
        </div>
        </Row>
      </Container>
    );
  }
  
  export default BoxAll;
  