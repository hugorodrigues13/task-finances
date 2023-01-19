import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 30px;

  .row-endereco{
    margin-bottom: 30px;
    height: 100px;
  }

  .form-item{
    display: flex;
    margin: 0;
    flex-direction: column;
  }

.div-form{
        display: flex;
        flex-direction: column;
        align-items: left;
        margin-bottom: 10px;
    }

  .input-grande{
    width: 63.5vh;
    height: 35px;
  }

  .input-medio{
    width: 20.3vh;
    height: 35px;
  }

  .input-pequeno{
    width: 30%;
    height: 35px;
  }

  .input-extra-pequeno {
    width: 10%;
    height: 35px;
  }

  .input-endereco{
    width: 31vh;
    height: 35px;
    margin-right: 20px;
  }

  .input-numero{
    width: 7vh;
    height: 35px;
    margin-right: 20px;
  }

  .input-bairro{
    width: 20.5vh;
    height: 35px;
  }

  .input-estado{
    width: 15vh;
    height: 35px;
    margin-right: 20px;
  }

  .input-cep{
    width: 12.5vh;
    height: 35px;
  }

  label{
      font-size: 14px;
      flex-direction: column;
      margin-right: 10px;
    }

.div-email{
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.input-email{
  width: 31vh;
  height: 35px;
}

.button-add{
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-top: 0;
  width: 180px;
  border: none;
  background-color: none;
  box-shadow: none;
  color: #00C0EF;
}

.button-delete{
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  width: 60px;
  border: none;
  background-color: none;
  box-shadow: none;
  color: #B5334D;
}


.div-button-add{
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-add{
  margin-right: 5px;
  height: 30px;
}

.sub-div-complemento{
  margin-bottom: 10px;
  height: 40px;
}

.div-telefone{
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  height: 70px;
}

.input-telefone{
  width: 20.3vh;
  height: 30px;
}

.delete-phone{
  cursor: pointer;

  :hover{
    color: #B5334D;
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
}

.input-mask-cnpj{
  width: 20.5vh;
  border: none;
  border-radius: 6px;
  transition: all 0.2s;
  box-sizing: border-box;
  padding-left: 10px;


  :hover{
    border-color: #4096FF;
  }

  :focus{
    box-shadow: 0 0 2px 0 #4096FF;
    outline: 0;
    border-color: #4096FF;

  }
}

.input-mask-cep{
  width: 12.5vh;
  height: 32.5px;
  border: none;
  border-radius: 4px;
  padding-left: 10px;


  :hover{
    border-color: #4096FF;
  }

  :focus{
    box-shadow: 0 0 2px 0 #4096FF;
    outline: 0;
    border-color: #4096FF;

  }
}

.input-delete-suffix{
  border-radius: 0px 4px 4px 0px;
  border-left: 0;
}

.input-mask-telefone{
  width: 16.7vh;
  margin-top: 1.5px;
  height: 90%;
  transition: all 0.2s;
  padding-left: 10px;
  border: none;

  :focus{
    outline: 0;
  }
}

`;