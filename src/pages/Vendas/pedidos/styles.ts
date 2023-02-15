import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  max-height: 100%;
  max-width: 100%;
  padding: 0 0 20px 20px;


  .cabecalho{
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  .button-importar {
    background-color: transparent;
    border: none;
    background-color: #17c69b;
    color: #fff;
    margin-top: 0 !important;

    :hover{
      background-color: #2A6266;
      color: #fff;
      border-color: #000;
    }
  }


  .title{
    font-size: 22px;
    margin-bottom: 40px;
    color: #152252;
  }

  .icons-top{
    color: #152252;
    cursor: pointer;

    :hover{
      color: #2A6266;
        transition: 0.5 ease-out;
    }

  }

  .row-client{
    border-bottom: 1px solid;
    width: 100%;
    color: #152252;
    
  }

  .input-pedido{
    border: 1px solid;
  }

  .row-pedido{
    margin-top: 100px;
    border-bottom: 1px solid;
    width: 100%;
    color: #152252;
    
  }
  .column-div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    
  }

  .div-top{
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    padding-right: 40px;
  }

  .icons{
    width: 51px;
    height: 61px;
    color: #152252;
  }

  h1{
    font-size: 20px;
    margin: 0 10px 0 10px;
    color: #152252;
  }

  .button-red{
    margin-top: 10px;
    width: 120px;
    border-radius: 12px;
    background-color: #17c69b;
    color: #fff;

    :hover{
      background-color: #2A6266;
      color: #fff;
      border: none;
    }
  }

  .button-green{
    margin-top: 10px;
    width: 120px;
    border-radius: 12px;
    background-color: #17c69b;
    color: #fff;

    :hover{
      background-color: #2A6266;
      color: #fff;
      border: none;
    }
  }

  .radio-select{
    display: flex;
    margin-bottom: 30px !important;

  }

`;