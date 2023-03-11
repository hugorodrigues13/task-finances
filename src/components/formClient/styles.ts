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
    width: 62vh;
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
    width: 29vh;
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

.div-email{
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-top: 10px ;
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
}

.div-telefone{
  display: flex;
  flex-direction: column;
  padding-left: 12px;
}

.delete-phone{
  cursor: pointer;

  :hover{
    color: #B5334D;
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
}


.input-mask-cep{
  width: 13vh;
}

.input-delete-suffix{
  border-radius: 0px 4px 4px 0px;
  border-left: 0;
}

.input-mask-telefone{
  width: 17vh !important;
}

.select-form{
  display: flex;
  width: 145px;
  border: none;
  font-size: 15px;
  background-color: transparent;
  border-bottom: solid 1px #112D92;
  height: 40px;
  margin-left: 5px;
  margin-right: 15px;
}

.select-form::placeholder{
  color: #112D92 !important;

}


`;