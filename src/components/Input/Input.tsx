import React, { ReactNode, useState, useCallback, InputHTMLAttributes } from "react";
import { cep, currency, cnpj, cpf, telefone } from '../../components//form/masks';
import { Container } from "../form/styles";
import './styles.css'
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  mask: "cep" | "currency" | "cnpj" | "cpf" | "telefone"
  prefix?: string
  suffix?: string | any

}
const InputAnt: React.FC<InputProps> = ({mask, prefix, suffix, ...props}) => {

const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    // XX.XXX.XXX/0001-XX
    // regex
    if(mask === 'cep'){
      cep(e)
    } else if(mask === 'currency'){
      currency(e)
    } else if(mask === 'cnpj'){
      cnpj(e)
    } else if(mask === 'telefone'){
      telefone(e)
    } else if(mask === 'cpf'){
      cpf(e)
    }
     
  }, [mask])

  return (
    <div className="div-group-input">
      {prefix && <span>{prefix}</span>}
      <input {...props} onKeyUp={handleKeyUp}/>
      {suffix && <span className="suffix">{suffix}</span>}
    </div>
  )

}

export default InputAnt;