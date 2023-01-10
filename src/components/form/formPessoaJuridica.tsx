import { Row, Select } from "antd";
import Input from "antd/es/input/Input";
import { Option } from "antd/es/mentions";
import React, { ReactNode } from "react";
import { Container } from "./styles";

const PessoaJuridica: React.FC = () => {
    return (
      <Container>
        <div className="div-form">
          <h1>CNPJ</h1>
          <Input className="input-medio"/>
        </div>
        <div className="div-form">
          <h1>Nome</h1>
          <Input className="input-grande"/>
        </div>
        <div className="div-form">
          <h1>Telefone</h1>
          <Input className="input-medio"/>
        </div>
        <div className="div-form">
          <h1>E-mail</h1>
          <Input className="input-grande"/>
        </div>

      {/*------------ ENDEREÇO ----------------*/}

      <Row className="row-endereco">
        <div className="sub-div-endereco">
          <h1>Endereço Principal</h1>
          <Input className="input-endereco"/>
        </div>
        <div className="sub-div-endereco">
          <h1>N°</h1>
          <Input className="input-numero"/>
        </div>
        <div className="sub-div-endereco">
            <h1>Bairro</h1>
            <Input className="input-bairro"/>
        </div>
      </Row>

      <Row className="row-endereco">
        <div className="sub-div-endereco">
          <h1>Cidade</h1>
          <Input className="input-endereco"/>
        </div>
        <div className="sub-div-endereco">
          <h1>Estado</h1>
          <Select defaultValue="Option1" className="input-estado">
            <Option value="Option1">Option1</Option>
            <Option value="Option2">Option2</Option>
          </Select>
        </div>
        <div className="sub-div-endereco">
            <h1>CEP</h1>
            <Input className="input-cep"/>
        </div>
      </Row>
        <div className="sub-div-endereco">
            <h1>Complemento</h1>
            <Input className="input-grande"/>
        </div>
  </Container>
    );
  }
  
  export default PessoaJuridica;
  