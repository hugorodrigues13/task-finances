import { Container, Box } from './styles';
import { EnvelopeSimple, Lock } from 'phosphor-react';
import { Button, Image, Input } from 'antd';
// const {Logo} = require("../../assets/logo.svg")
import Logo from '../../@types/assets/logo.svg'

const Auth = () => {
  return (
    <>
      <Container>
        <Box>
        <img src={Logo} alt=""  height={50} width={140}/>
          <p className="title">Faça login e comece a usar!</p>
          <p className="email">Endereço de e-mail</p>
          <Input
            className="textfield"
            type="text"
            prefix={<EnvelopeSimple size={22} />}
            placeholder="Digite seu e-mail"
          />
          <p className="senha">Sua senha</p>
          <Input
            className="textfield"
            type="password"
            prefix={<Lock size={22} />}
            placeholder="Digite sua senha"
          />
          <Button className="signin-button">Entrar</Button>
        </Box>
      </Container>
    </>
  );
}

export default Auth;