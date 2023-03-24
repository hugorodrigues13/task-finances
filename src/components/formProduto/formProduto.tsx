import { Button, Form, Row, Tooltip } from "antd";
import InputMask from "../inputAnt/inputAnt"
import SelectAnt from "../selectAnt/selectAnt"
import { Plus, Trash, TrashSimple } from "phosphor-react";
import React, { useState} from "react";
import { Container } from "./styles";
import UploadAnt from "../upload/upload"
import TextArea from "antd/es/input/TextArea";


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
  const [value, setValue] = useState('');

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
          <Row className="div-form-between">

          <div className="form-item">
              <UploadAnt/>
            </div>
            
            <Form.Item className="form-item-cnpj">
              <InputMask
                className="input-cnpj"  
                placeholder={`Nome`} 
                name="cpf"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}/>
            </Form.Item>
          </Row>
          <Row className="div-form-between">
          <Form.Item className="form-item">
            <InputMask 
              className="input-medio" 
              placeholder={`Código / SKU`} 
              name="codigo"
              value={razaoSocial}
              onChange={(e) => setRazaoSocial(e.target.value)}/>
          </Form.Item>
          <Form.Item className="form-item">
            <InputMask 
              className="input-medio" 
              placeholder={`Peso`} 
              name="peso"
              value={razaoSocial}
              onChange={(e) => setRazaoSocial(e.target.value)}
              suffix={<Tooltip title="Peso em Kilos">Kg</Tooltip>}
              />
          </Form.Item>
          <Form.Item className="form-item">
            <InputMask
              className="input-medio" 
              placeholder={`Preço`} 
              name="preco"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              prefix={<Tooltip title="Real">R$</Tooltip>}/>
          </Form.Item>
          </Row>

          <Row className="div-form-between">
          <Form.Item className="form-item">
            <div className="titles-medio">COMISSÕES</div>
            <InputMask
              className="input-medio" 
              placeholder={`5,00`} 
              name="preco"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              suffix={<Tooltip title="Real">%</Tooltip>}
              />
          </Form.Item>
          
          <Form.Item className="form-item">
          <Row className="titles-medio">IMPOSTOS</Row>
          <InputMask
              className="input-medio" 
              placeholder={`IPI`} 
              name="preco"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              suffix={<Tooltip title="Peso em Kilos">R$</Tooltip>}
              />
          </Form.Item>
          </Row>

          <Row className="div-form">
            <Form.Item className="form-item">
              <div className="titles-grande">INFORMAÇÕES ADICIONAIS</div>
              <TextArea
                value={value}
                className="descricao"
                onChange={(e) => setValue(e.target.value)}
                placeholder="Descreva as informações adicionais deste produto"
                autoSize={{ minRows: 3, maxRows: 4 }}
              />
            </Form.Item>
          </Row>
            
      </Container>
    );
  }
  
  export default PessoaJuridica;
  