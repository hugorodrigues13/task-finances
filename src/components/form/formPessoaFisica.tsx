import { Button, Col, Form, Row, Select, Tooltip } from "antd";
import FormItem from "antd/es/form/FormItem";
import Input from "antd/es/input/Input";
import { Option } from "antd/es/mentions";
import { Plus, Trash, TrashSimple } from "phosphor-react";
import React, { ReactNode, useState } from "react";
import { Container } from "./styles";

  
const PessoaFisica: React.FC = () => {
  const [item, setItem] = useState('');
  const [phones, setPhones] = useState([""])
  const [escondeButton, setEscondeButton] = useState(false)

  const addItem = () => {
    setPhones([...phones, ""])
}

  const handleChangePhone = (e: any, index: any) => {
      phones[index] = e.target.value;
      setPhones([...phones])
  }

  const handleRemovePhone = (position: any) => {
    setPhones([...phones.filter((_, index) => index !== position)])

  }

    return (
      <Container>
          <Row className="div-form">
            <Form.Item className="form-item">
              <Col>CPF</Col>
              <Input className="input-medio"/>
            </Form.Item>
          </Row>
          <Row className="div-form">
          <Form.Item className="form-item">
            <Col>Nome</Col>
            <Input className="input-grande"/>
          </Form.Item>
          </Row>
          <Row gutter={24}>
            {
              phones.map((phone, index) => (
              <Row key={index} className="div-telefone">
                <Form.Item className="form-item">
                  <Col>{`Telefone ${index + 1}`}</Col>
                  <Input
                    type="text"
                    id={`phone-${index + 1}`}
                    className="input-telefone"
                    placeholder={`Informe o telefone`} 
                    value={phone} 
                    name="phone" 
                    suffix={<Tooltip title="Deletar"><TrashSimple size={16} className="delete-phone" onClick={() => {handleRemovePhone(index)}}/></Tooltip>}
                    onChange = {e => handleChangePhone(e, index)}/>
                  </Form.Item>
                </Row>
              ))
            }
            <Row className="div-button-add">
             <Button 
                className="button-add" 
                onClick={addItem}
                icon={<Plus size={18} className="icon-add"/>}
                
                >adicionar novo numero</Button>
              </Row> 
          </Row>
          
          <Row className="div-email">
          <Form.Item className="form-item">
            <Col>E-mail</Col>
            <Input className="input-grande"/>
          </Form.Item>
          </Row>

          {/*------------ ENDEREÇO ----------------*/}

          <Row className="row-endereco">
            {
               phones.map((phone, index) => (
                <>
            <Row className="div-form">
            <Form.Item className="form-item">
              <Col>Endereço Principal</Col>
              <Input className="input-endereco"/>
            </Form.Item>
            </Row>
            <Row className="div-form">
            <Form.Item className="form-item">
              <Col>N°</Col>
              <Input className="input-numero"/>
            </Form.Item>
            </Row>
            <Row className="div-form">
            <Form.Item className="form-item">
                <Col>Bairro</Col>
                <Input className="input-bairro"/>
            </Form.Item>
            </Row>
            <Row className="row-endereco">
              <Row className="div-form">
              <Form.Item className="form-item">
                <Col>Cidade</Col>
                <Input className="input-endereco"/>
              </Form.Item>
              </Row>
              <Row className="div-form">
              <Form.Item className="form-item">
                <Col>Estado</Col>
                <Select defaultValue="Option1" className="input-estado">
                  <Option value="Option1">Option1</Option>
                  <Option value="Option2">Option2</Option>
                </Select>
              </Form.Item>
              </Row>
              <Row className="div-form">
              <Form.Item className="form-item">
                  <Col>CEP</Col>
                  <Input className="input-cep"/>
              </Form.Item>
              </Row>
              <Row className="div-form">
              <Form.Item className="form-item">
                  <Col>Complemento</Col>
                  <Input className="input-grande"/>
              </Form.Item>
              </Row>
          </Row>
         
                </>
              ))
            }

        <Row className="div-button-add">
             <Button 
                className="button-add" 
                onClick={addItem}
                icon={<Plus size={18} className="icon-add"/>}
                
                >adicionar novo endereco</Button>
              </Row> 
          </Row>

         
            
      </Container>
    );
  }
  
  export default PessoaFisica;
  