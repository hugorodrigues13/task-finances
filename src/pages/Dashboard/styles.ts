import styled from 'styled-components';

export const Container = styled.body`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #fff;
  justify-content: center;
  align-items: center;

  .div-logo{
    display: flex;
    height: 80px;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
    margin-top: -15px;
    border-bottom: 1px solid #fff;
  }
  .logo-dash-principal{
    display: flex;
    margin-top: 10px;
    width: 130px;
    height: 50px;
   
  }

  .div-logo-mini{
    display: flex;
    width: 80px;
    height: 50px;
    margin-bottom: 40px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  .logo-dash-mini{
    display: flex;
    width: 40px;
    height: 40px;
  }

  .sider{
    display: flex;
  }

  .layout{
    display: flex;
    background-color: red;
  }

  .trigger{
    cursor: pointer !important;
    font-size: 24px;
  }

`;