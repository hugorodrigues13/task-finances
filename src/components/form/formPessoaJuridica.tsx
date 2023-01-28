import { Button, Form, Row, Tooltip } from "antd";
import InputMask from "../InputAnt/Input"
import SelectAnt from "../SelectAnt/SelectAnt"
import { Plus, Trash, TrashSimple } from "phosphor-react";
import React, { useState} from "react";
import { Container } from "./styles";


// interface Endereco{
//   id: number;
//   endereco: string;
//   numero: number;
//   cidade: string;
//   bairro: string;
//   estado: string;
//   cep: string;
//   complemento: string;
// }
// interface Usuario {
//   id: number;
//   cnpj: string
//   cpf: string
//   razaoSocial: string;
//   nome: string
//   email: string;

//   endereco: Endereco[]
// }
  
const PessoaJuridica: React.FC = () => {
  const [cidade, setCidade] = useState('');
  const [cnpj, setCnpj] = useState('')
  const [bairro, setBairro] = useState('')
  const [razaoSocial, setRazaoSocial] = useState('')
  const [email, setEmail] = useState('')
  const [cep, setCep] = useState('')
  const [phones, setPhones] = useState([""])
  const [endereco, setEndereco] = useState([""])
  // const [estado, setEstado] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')

  // const [usuario, setUsuario] = useState<Usuario>({} as Usuario)

  // const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
      
  //     setUsuario({
  //       ...usuario,
  //       [e.currentTarget.name]: e.currentTarget.value
  //     })

  // }, [usuario, phones])

  // const handleSubmit = () => {
  //   const data = {cidade, cnpj, bairro, razaoSocial, email, cep, phones, endereco, estado, numero, complemento}
  // }


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
            <Form.Item className="form-item">
              <InputMask 
                mask="cnpj" 
                placeholder={`CNPJ`} 
                name="cpf"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}/>
            </Form.Item>
          </Row>
          <Row className="div-form">
          <Form.Item className="form-item">
            <InputMask 
              className="input-grande" 
              placeholder={`Razão Social`} 
              name="razaoSocial"
              value={razaoSocial}
              onChange={(e) => setRazaoSocial(e.target.value)}/>
          </Form.Item>
          </Row>
          <Row gutter={24}>
            {
              phones.map((phone, index) => (
              <Row key={index} className="div-telefone">
                <Form.Item className="form-item">
                  <InputMask
                    mask="telefone"
                    id={`phone-${index + 1}`}
                    className="input-mask-telefone"
                    placeholder={index >= 1 ?`Telefone ${index + 1}` : `Telefone`}
                    value={phone}
                    name="telefone"
                    maxLength={11}
                    onChange = {(e)  => handleChangePhone(e, index)}
                    suffix={<Tooltip title="Deletar"><TrashSimple size={16} className="delete-phone" onClick={() => {handleRemovePhone(index)}}/></Tooltip>}
                    />
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
            <InputMask
              className="input-grande" 
              placeholder={`E-mail`} 
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          </Row>

          {/*------------ ENDEREÇO ----------------*/}

          <Row className="row-endereco">
            {
               endereco.map((endereco, index) => (
                <>
            <Row className="div-form">
            <Form.Item className="form-item">
              <InputMask 
                className="input-endereco"
                id={`endereco-${index + 1}`}
                placeholder={index >= 1 ? `Endereco ${index + 1}` : "Endereço principal"}
                value={endereco}  
                onChange = {e => handleChangeEndereco(e, index)}/>
            </Form.Item>
            </Row>
            <Row className="div-form">
            <Form.Item className="form-item">
              <InputMask 
                className="input-numero" 
                type="number" 
                name="numero"
                value={numero}
                onChange = {(e) => setNumero(e.target.value)} 
                placeholder={`N°`}/>
            </Form.Item>
            </Row>
            <Row className="div-form">
            <Form.Item className="form-item">
                <InputMask 
                  className="input-bairro"  
                  value={bairro}
                  onChange = {(e) => setBairro(e.target.value)} 
                  placeholder={`Bairro`}/>
            </Form.Item>
            </Row>
            <Row className="row-endereco">
              <Row className="div-form">
              <Form.Item className="form-item">
                <InputMask 
                  className="input-endereco"  
                  value={cidade}
                  onChange = {(e) => setCidade(e.target.value)} 
                  placeholder={`Cidade`}/>
              </Form.Item>
              </Row>
              <Row className="div-form">
              <Form.Item className="form-item">
                <SelectAnt />
                 
              </Form.Item>
              </Row>
              <Row className="div-form">
              <Form.Item className="form-item">
                  <InputMask 
                      maxLength={9} 
                      className="input-mask-cep" 
                      mask="cep" 
                      placeholder={`CEP`} 
                      name="cep"
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}/>
              </Form.Item>
              </Row>
              <Row className="div-form">
              <Form.Item className="form-item">
                  <InputMask 
                    className="input-grande"
                    value={complemento}
                    onChange={(e) => setComplemento(e.target.value)}
                    placeholder={`Complemento`}/>
              </Form.Item>
              </Row>
          </Row>
                </>
              ))
            }

          {/*----------------------------- BOTOES ADD AND DELETE ----------------------------------- */}

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

          {/* <Button onClick={() => centerconsole.log(usuario)}>Testando</Button> */}
            
      </Container>
    );
  }
  
  export default PessoaJuridica;
  