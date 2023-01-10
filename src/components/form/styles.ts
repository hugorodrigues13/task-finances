import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  .row-endereco{
    margin-bottom: 20px;
  }

.div-form{
        display: flex;
        justify-content: center;
        align-items: left;
        margin-bottom: 20px;
        flex-direction: column;
  }

  .input-grande{
  }

  .input-medio{
    width: 50%;
  }

  .input-pequeno{
    width: 40%;
  }

  .input-extra-pequeno {
    width: 10%;
  }

  .input-endereco{
    width: 442px;
    margin-right: 20px;
  }

  .input-numero{
    width: 70px;
    margin-right: 20px;
  }

  .input-bairro{
    width: 200px;
  }

  .input-estado{
    width: 100px;
    margin-right: 20px;
  }

  .input-cep{
    width: 170px;
  }

  h1{
      font-size: 14px;
      margin-right: 10px;
    }

.div-email{
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-bottom: 20px;
}

.input-email{
  width: 372px;
}

.button-add-email{
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  padding: 0;
  margin-top: 22px !important;
  margin-left: 10px;
  width: 180px;
  border: none;
  background-color: none;
  box-shadow: none;
  color: #00C0EF;
}

.icon-add{
  margin-right: 5px;
}

`;