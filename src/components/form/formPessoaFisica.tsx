import { Button, Row, Select } from "antd";
import Input from "antd/es/input/Input";
import { Option } from "antd/es/mentions";
import { Plus } from "phosphor-react";
import React, { ReactNode, useState } from "react";
import { Container } from "./styles";

  
const PessoaFisica: React.FC = () => {
  const [item, setItem] = useState('');
  const [itemList, setItemList] = useState([""])
  const [escondeButton, setEscondeButton] = useState(false)

  const addItem = () => {
    setItemList([...itemList, ""])
}

    return (
      <Container>
          <div className="div-form">
            <h1>CPF</h1>
            <Input className="input-medio"/>
          </div>
          <div className="div-form">
            <h1>Nome</h1>
            <Input className="input-grande"/>
          </div>
          <Row gutter={24}>
            {
              itemList.map((itemlista, index) => (
                <div key={index} className="div-telefone">
                  <h1>Telefone</h1>
                  <Input className="input-telefone" value={item} name="item" onChange = {e => setItem(e.target.value)}/>
                </div>
              ))
            }
            <div className="div-button-add">
             <Button 
                className="button-add" 
                onClick={addItem}
                icon={<Plus size={18} className="icon-add"/>}
                
                >adicionar novo numero</Button>
              </div> 
          </Row>
          
          <div className="div-email">
            <h1>E-mail</h1>
            <Input className="input-grande"/>
            
          </div>

          {/*------------ ENDEREÇO ----------------*/}

          <Row className="row-endereco">
            {
               itemList.map((itemlista, index) => (
                <>
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
            <div className="sub-div-complemento">
                <h1>Complemento</h1>
                <Input className="input-grande"/>
            </div>
          </Row>
         
                </>
              ))
            }

        <div className="div-button-add">
             <Button 
                className="button-add" 
                onClick={addItem}
                icon={<Plus size={18} className="icon-add"/>}
                
                >adicionar novo endereco</Button>
              </div> 
          </Row>

         
            
      </Container>
    );
  }
  
  export default PessoaFisica;
  