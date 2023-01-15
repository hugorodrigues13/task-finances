import { AutoComplete, Button, Checkbox, Col, Input, Modal, Radio, RadioChangeEvent, Row, Select, Tooltip } from "antd";
import React, {ReactNode, useEffect, useState} from "react";
import { Article, BookOpen, ClipboardText, CodesandboxLogo, DownloadSimple, ListChecks, Truck, UsersFour } from 'phosphor-react';
import {Container} from './styles'
import PessoaFisica from "../../../components/form/formPessoaFisica";
import PessoaJuridica from "../../../components/form/formPessoaJuridica";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

const { Option } = Select;

interface BaseLayoutProps {
  children?: ReactNode;
}

const CadastrarPedido: React.FC<BaseLayoutProps> = ({children}) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [value, setValue] = useState(1);
  const [pessoaFisica, setPessoaFisica] = useState([""])


  const radioPF = () => {
    setPessoaFisica([...pessoaFisica, ""])
}

  const radioChecked = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };


    return (
      <Container>
        <Row gutter={24} className="cabecalho">
            <h1 className="title">CADASTRAR PEDIDO</h1>
          <div className='div-top'>
            <Col>
                <Tooltip title="Meus pedidos">
                  <ListChecks className="icons-top" size={32}/>
                </Tooltip>
            </Col>
            <Col>
                <Tooltip title="Clientes">
                  <UsersFour className="icons-top" size={32}/>
                </Tooltip>
            </Col>
            <Col>
              <Tooltip title="Produtos">
                <Truck className="icons-top" size={32}/>
              </Tooltip>
            </Col>
            <Col>
              <Button className="button-importar">
                IMPORTAR
              </Button>
            </Col>
          </div>
        </Row>
          <Row gutter={24} className='row-client'>
               <div className='column-div'>
                    <ClipboardText size={32} className='icons' />
                  <h1>Cliente</h1>
              <Input.Group compact>
                  <AutoComplete
                    className="input-pedido"
                    style={{ width: '800px' }}
                    placeholder="Digite o nome ou o CNPJ / CPF do cliente"
                    options={[{ value: 'text 1' }, { value: 'text 2' }]}
                  />
                </Input.Group>
               </div>
          </Row>
          <div>
            <Button 
                className="button-red"
                onClick={showModal}
                >
              Novo Cliente
            </Button>

            <Modal
              title="INSIRA OS DADOS DO CLIENTE"
              open={open}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
              okText="Salvar"
              cancelText="Cancelar"
            >

            <div className="radio-select">
              <Radio.Group onChange={radioChecked} value={value}>
                
                      <Radio value={1} >Pessoa Física</Radio>
                  
                      <Radio value={2}>Pessoa Jurídica</Radio>
              </Radio.Group>
            </div>
            {
                  pessoaFisica.map((pf, index) => (
                    <div key={index} >
                      {
                          value === 1 ? <PessoaFisica /> : <PessoaJuridica />
                      }
                      
                    </div>
              ))
                  
                }
      </Modal>
        </div> 

           <Row gutter={24} className='row-pedido'>
               <div className='column-div'>
               <BookOpen size={32} className='icons'/>
                  <h1>Produto</h1>
              <Input.Group compact>
                  <AutoComplete
                    className="input-pedido"
                    style={{ width: '800px' }}
                    placeholder="Digite o código ou nome do produto"
                    options={[{ value: 'text 1' }, { value: 'text 2' }]}
                  />
              </Input.Group>
               </div>
          </Row>
          <div>
            <Button 
                className="button-green"
                >
              Novo Produto
            </Button>
        </div>    
      </Container>
    );
  }
  
  export default CadastrarPedido;
  