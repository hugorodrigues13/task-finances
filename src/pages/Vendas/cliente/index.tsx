import { Col, Row } from "antd";
import { CalendarBlank, CalendarPlus, Handshake, SelectionBackground, ThumbsDown, ThumbsUp } from "phosphor-react";
import React from "react";
import {Container} from "./styles"
import BoxClient from '../../../components/boxClient'
import Tabela from '../../../components/table/tabela'
  
const Cliente: React.FC = () => {
    return (
      <Container>
        <BoxClient/>
        <Tabela/>
      </Container>
    );
  }
  
  export default Cliente;
  