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
  }

  .input-medio{
    width: 20.3vh;
  }

  .input-pequeno{
    width: 30%;
  }

  .input-extra-pequeno {
    width: 10%;
  }

  .input-endereco{
    width: 31vh;
    margin-right: 20px;
  }

  .input-numero{
    width: 7vh;
    margin-right: 20px;
  }

  .input-bairro{
    width: 20.5vh;
  }

  .input-estado{
    width: 15vh;
    margin-right: 20px;
  }

  .input-cep{
    width: 12.5vh;
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
}

.delete-phone{
  cursor: pointer;

  :hover{
    color: #B5334D;
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
}

`;