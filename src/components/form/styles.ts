import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  .row-endereco{
    margin-bottom: 20px;
    height: 100px;
  }

.div-form{
        display: flex;
        justify-content: center;
        align-items: left;
        margin-bottom: 20px;
        flex-direction: column;
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
    margin-right: 50px;
  }

  .input-numero{
    width: 7vh;
    margin-right: 50px;
  }

  .input-bairro{
    width: 15.5vh;
  }

  .input-estado{
    width: 10vh;
    margin-right: 50px;
  }

  .input-cep{
    width: 12.5vh;
  }

  h1{
      font-size: 14px;
      margin-right: 10px;
    }

.div-email{
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 20px;
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
  margin-bottom: 20px;

  height: 40px;
}

.div-telefone{
  padding-left: 12px;
  height: 70px;
}

.input-telefone{
  width: 20.3vh;
}

`;