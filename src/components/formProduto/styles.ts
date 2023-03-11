import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 30px;

  .titles-medio{
    display: flex;
    font-weight: 800;
    font-size: 16px;
    width: 100%;
    color: #112D92;
    margin-top: 30px;
    margin-bottom: 20px;
    border-bottom: 1px solid;
    align-items: center;
    justify-content: center;
  }

  .titles-grande{
    display: flex;
    font-weight: 800;
    font-size: 16px;
    color: #112D92;
    margin-top: 30px;
    border-bottom: 1px solid;
    width: 100%;
    align-items: center;
    justify-content: center;
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
    width: 16.3vh;
  }

  .input-pequeno{
    width: 30%;
  }

  .input-extra-pequeno {
    width: 10%;
  }

  .input-cnpj{
    width: 48vh;
  }

.delete-phone{
  cursor: pointer;

  :hover{
    color: #B5334D;
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
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

.form-item-cnpj{
    display: flex ;
    flex-direction: row !important;
    margin-top: 60px;
    justify-content: space-between !important;
}

.div-form-between{
        display: flex;
        width: 100% !important;
        justify-content: space-between !important;
        align-items: left;
        margin-bottom: 10px;
    }

.descricao{
  border: 1px solid black !important;
  margin-top: 10px;
  
}


`;