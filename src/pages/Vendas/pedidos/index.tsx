import { AutoComplete, Button, Col, Input, Modal, Radio, RadioChangeEvent, Row, Tooltip } from "antd";
import React, {ReactNode, useState} from "react";
import { BookOpen, ClipboardText, ListChecks, Truck, UsersFour } from 'phosphor-react';
import {Container} from './styles'
import PessoaFisica from "../../../components/formClient/formPessoaFisica";
import PessoaJuridica from "../../../components/formClient/formPessoaJuridica";
import Produto from "../../../components/formProduto/formProduto";
import Tabela from "../../../components/table/tabela";
import UploadAnt from "../../../components/upload/upload";

interface BaseLayoutProps {
  children?: ReactNode;
}

const CadastrarPedido: React.FC<BaseLayoutProps> = ({children}) => {
  const [openClient, setOpenClient] = useState(false);
  const [openProduto, setOpenProduto] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [value, setValue] = useState(1);

  const radioChecked = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    
  };

  ///////////// MODAL CLIENT

  const showModalClient = () => {
    setOpenClient(true);
  };

  const handleOkClient = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpenClient(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancelClient = () => {
    console.log('Clicked cancel button');
    setOpenClient(false);
  };


  
  ////////// MODAL PRODUTO

  const showModalProduto = () => {
    setOpenProduto(true);
  };

  const handleOkProduto = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpenProduto(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancelProduto = () => {
    console.log('Clicked cancel button');
    setOpenProduto(false);
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
                    placeholder="Digite o nome ou o CNPJ / CPF do cliente"
                    options={[{ value: 'text 1' }, { value: 'text 2' }]}
                  />
                </Input.Group>
               </div>
          </Row>
          <div>
            <Button 
                className="button-red"
                onClick={showModalClient}
                >
              Novo Cliente
            </Button>

      <Modal
        title="INSIRA OS DADOS DO CLIENTE"
        open={openClient}
        onOk={handleOkClient}
        confirmLoading={confirmLoading}
        onCancel={handleCancelClient}
        okText="Salvar"
        cancelText="Cancelar"
      >

      <div className="radio-select">
        <Radio.Group onChange={radioChecked} value={value}>
          
                <Radio value={1} className="radio-title">Pessoa Física</Radio>
            
                <Radio value={2} className="radio-title">Pessoa Jurídica</Radio>
        </Radio.Group>
      </div>
    
                {
                    value === 1 ? <PessoaFisica /> : <PessoaJuridica />
                }
             
      </Modal>

      <Modal
              title="INSIRA OS DADOS DO PRODUTO"
              open={openProduto}
              onOk={handleOkProduto}
              confirmLoading={confirmLoading}
              onCancel={handleCancelProduto}
              okText="Salvar"
              cancelText="Cancelar"
            >
         
            <Produto /> 
             
      </Modal>
        </div> 

           <Row gutter={24} className='row-pedido'>
               <div className='column-div'>
               <BookOpen size={32} className='icons'/>
                  <h1>Produto</h1>
              <Input.Group compact>
                  <AutoComplete
                    className="input-pedido"
                    placeholder="Digite o código ou nome do produto"
                    options={[{ value: 'text 1' }, { value: 'text 2' }]}
                  />
              </Input.Group>
               </div>
          </Row>
          <div>
            <Button 
                className="button-green"
                onClick={showModalProduto}
                >
              Novo Produto
            </Button>
        </div>

        <Tabela/>


      </Container>
    );
  }
  
  export default CadastrarPedido;
  