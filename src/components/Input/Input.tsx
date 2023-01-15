import React, { ReactNode, useState, useCallback, InputHTMLAttributes } from "react";
import { cep, currency } from '../../components//form/masks';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  mask: "cep" | "currency"

}
const Input: React.FC<InputProps> = ({mask, ...props}) => {
const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    // XX.XXX.XXX/0001-XX
    // regex

    if(mask === 'cep'){
      cep(e)
    } else if(mask === 'currency'){
      currency(e)
    }
     
  }, [mask])

  return (
    <div>
      <input {...props} onKeyUp={handleKeyUp}/>
    </div>
  )

}

export default Input;