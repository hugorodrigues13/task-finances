
import React, {ReactNode, useState } from 'react';
import { Container } from './styles';
import { EnvelopeSimple, Lock, LockKey } from 'phosphor-react';
import { Button, Input } from 'antd';
import "./auth.css";
// const {Logo} = require("../../assets/logo.svg")
import Logo from '../../@types/assets/favicon.png'

interface BaseLayoutProps {
  children?: ReactNode;
}

const Auth: React.FC<BaseLayoutProps> = ({children}) => {
  return (
    <>
      <Container>
      <header className="section">
        <div className="form-box">
          <div className="form-value">
            <form action="">
              <div className="logo">
              <img src="/logo.png" alt="Logo" />
                <h2>Login</h2>
              </div>
                <div className="inputbox">
                <EnvelopeSimple className="icons-login"/>
                  <input type="text" required></input>
                  <label >Email</label>
                </div>
                <div className="inputbox">
                <LockKey className="icons-login"/>
                  <input type="password" required></input>
                  <label >Senha</label>
                </div>
                <div className="forget">
                    <label ><input type="checkbox"></input> Lembrar senha? <a href="#">Esqueci a senha</a></label>
                    
                </div>
                <button>Entrar</button>
                <div className="register">
                  <p>Não tem uma conta? <a href="#">Registrar</a></p>
                </div>
            </form>
          </div>
        </div>
      </header>
      </Container>
    </>
  );
}

export default Auth;