import { Button, Col, Form, Row, Select, Tooltip } from "antd";
import FormItem from "antd/es/form/FormItem";
import Input from "antd/es/input/Input";
import InputMask from "../Input/Input"
import { Option } from "antd/es/mentions";
import { Plus, Trash, TrashSimple } from "phosphor-react";
import React, { ReactNode, useState, useCallback, InputHTMLAttributes } from "react";
import { cep, currency } from './masks';
import { Container } from "./styles";

interface Usuario {
  cep: string
}
  
const PessoaJuridica: React.FC = () => {
  const [item, setItem] = useState('');
  const [phones, setPhones] = useState([""])
  const [endereco, setEndereco] = useState([""])

  const [usuario, setUsuario] = useState<Usuario>({} as Usuario)

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
      setUsuario({
        ...usuario,
        [e.currentTarget.name]: e.currentTarget.value
      })

  }, [usuario])


  const addPhone = () => {
    setPhones([...phones, ""])
}

  const handleChangePhone = (e: any, index: any) => {
      phones[index] = e.target.value;
      setPhones([...phones])
  }

  const handleRemovePhone = (position: any) => {
    setPhones([...phones.filter((_, index) => index !== position)])

  }

  const addEndereco = () => {
    setEndereco([...endereco, ""])
}

  const handleChangeEndereco = (e: any, index: any) => {
       endereco[index] = e.target.value
       setEndereco([...endereco]) 
  }

  const deleteEndereco = (position: any) => {
    setEndereco([...endereco.filter((_, index) => index < endereco.length - 1)])
}

    return (
      <Container>
          <Row className="div-form">
            <Form.Item className="form-item" >
              <Col>CNPJ</Col>
              <InputMask className="input-medio" mask="cep" placeholder={`EX: XX.XXX.XXX/0001-XX`} name="cep" onChange={handleChange}/>
            </Form.Item>
          </Row>
          <Row className="div-form">
          <Form.Item className="form-item">
            <Col>Razão Social</Col>
            <Input className="input-grande" placeholder={`Nome completo da empresa`}/>
          </Form.Item>
          </Row>
          <Row gutter={24}>
            {
              phones.map((phone, index) => (
              <Row key={index} className="div-telefone">
                <Form.Item className="form-item">
                  <Col>{index >= 1 ?`Telefone ${index + 1}` : `Telefone`}</Col>
                  <Input
                    type="text"
                    id={`phone-${index + 1}`}
                    className="input-telefone"
                    placeholder={`EX: (XX) X XXXX-XXXX`} 
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
                onClick={addPhone}
                icon={<Plus size={18} className="icon-add"/>}
                
                >adicionar novo numero</Button>
              </Row> 
          </Row>
          
          <Row className="div-email">
          <Form.Item className="form-item">
            <Col>E-mail</Col>
            <Input className="input-grande" placeholder={`Informe o e-mail da empresa`} />
          </Form.Item>
          </Row>

          {/*------------ ENDEREÇO ----------------*/}

          <Row className="row-endereco">
            {
               endereco.map((endereco, index) => (
                <>
            <Row className="div-form">
            <Form.Item className="form-item">
              <Col>{index >= 1 ? `Endereco ${index + 1}` : "Endereço principal"}</Col>
              <Input 
                className="input-endereco"
                id={`endereco-${index + 1}`}
                placeholder={`Informe o endereço`}
                value={endereco}  
                onChange = {e => handleChangeEndereco(e, index)}/>
            </Form.Item>
            </Row>
            <Row className="div-form">
            <Form.Item className="form-item">
              <Col>N°</Col>
              <Input className="input-numero"  onChange = {e => handleChangeEndereco(e, index)} placeholder={`EX: 1`}/>
            </Form.Item>
            </Row>
            <Row className="div-form">
            <Form.Item className="form-item">
                <Col>Bairro</Col>
                <Input className="input-bairro"  onChange = {e => handleChangeEndereco(e, index)} placeholder={`Informe o bairro`}/>
            </Form.Item>
            </Row>
            <Row className="row-endereco">
              <Row className="div-form">
              <Form.Item className="form-item">
                <Col>Cidade</Col>
                <Input className="input-endereco"  onChange = {e => handleChangeEndereco(e, index)} placeholder={`Informe a cidade`}/>
              </Form.Item>
              </Row>
              <Row className="div-form">
              <Form.Item className="form-item">
                <Col>Estado</Col>
                <Select defaultValue="Option1" className="input-estado" >
                  <Option value="Option1">Option1</Option>
                  <Option value="Option2">Option2</Option>
                </Select>
              </Form.Item>
              </Row>
              <Row className="div-form">
              <Form.Item className="form-item">
                  <Col>CEP</Col>
                  <Input className="input-cep" placeholder={`Seu CEP`}/>
              </Form.Item>
              </Row>
              <Row className="div-form">
              <Form.Item className="form-item">
                  <Col>Complemento</Col>
                  <Input className="input-grande" onChange = {e => handleChangeEndereco(e, index)} placeholder={`EX: APT, CASA, N°, PRÓXIMO A...`}/>
              </Form.Item>
              </Row>
          </Row>
                </>
              ))
            }

        <Row className="div-button-add">
             <Button 
                className="button-add" 
                onClick={addEndereco}
                icon={<Plus size={18} className="icon-add"/>}
                >adicionar novo endereco
             </Button>

                <Button 
                className="button-delete" 
                onClick={deleteEndereco}
                icon={<Trash size={22} className="icon-add"/>}
                
                ></Button>
                
              </Row> 
          </Row>

          <Button onClick={() => console.log(usuario)}>Testando</Button>
            
      </Container>
    );
  }
  
  export default PessoaJuridica;
  