export function cep(e: React.FormEvent<HTMLInputElement>){
  e.currentTarget.maxLength = 9;
  let value = e.currentTarget.value
  value = value.replace(/\D+/g, "")
  value = value.replace(/(\d{5})(\d)/, "$1-$2")
  e.currentTarget.value = value;
  return e
}

export function currency(e: React.FormEvent<HTMLInputElement>){
  let value = e.currentTarget.value;
  value = value.replace(/\D+/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".")

  e.currentTarget.value = value
  return e
  
}

export function telefone(e: React.FormEvent<HTMLInputElement>){
  e.currentTarget.maxLength = 15;
  let value = e.currentTarget.value
  value = value.replace(/\D+/g, '')
  value = value.replace(/(\d{2})(\d)/, '($1) $2')
  value = value.replace(/(\d{5})(\d+?$)/, '$1-$2')
  e.currentTarget.value = value;
  return e
  
}

export function cnpj(e: React.FormEvent<HTMLInputElement>){
    e.currentTarget.maxLength = 18
    let value = e.currentTarget.value
    value = value.replace(/\D+/g, '') // não deixa ser digitado nenhuma letra
    value = value.replace(/(\d{2})(\d)/, '$1.$2') // captura 2 grupos de número o primeiro com 2 digitos e o segundo de com 3 digitos, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de número
    value = value.replace(/(\d{3})(\d)/, '$1.$2')
    value = value.replace(/(\d{3})(\d)/, '$1/$2') // captura 2 grupos de número o primeiro e o segundo com 3 digitos, separados por /
    value = value.replace(/(\d{4})(\d)/, '$1-$2')
    value = value.replace(/(-\d{2})\d+?$/, '$1')

    e.currentTarget.value = value;
    return e
}

export function cpf(e: React.FormEvent<HTMLInputElement>){
  e.currentTarget.maxLength = 14
  let value = e.currentTarget.value

 value = value.replace(/\D/g, "")
 value = value.replace(/(\d{3})(\d)/, "$1.$2")
 value = value.replace(/(\d{3})(\d)/, "$1.$2")
 value = value.replace(/(\d{3})(\d{1,2})/, "$1-$2")
 value = value.replace(/(-\d{2})\d+?$/, "$1")
  

  e.currentTarget.value = value;
  return e
}