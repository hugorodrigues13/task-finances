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
    margin-bottom: 40px;
    justify-content: center;
    align-items: center;
    /* background-color: #112D92; */
    margin-top: -15px;
    border-bottom: 1px solid #fff;
  }
  .logo-dash-principal{
    display: flex;
    width: 140px;
    margin-top: 14px;
    height: 60px;
   
  }

  .div-logo-mini{
    display: flex;
    width: 100%;
    height: 63.5px;
     margin-bottom: 40px;
    justify-content: center;
    align-items: center;
  }

  .logo-dash-mini{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 50px;
    height: 40px;
  }

  .sider{
    display: flex;
  }

  .layout{
    display: flex;
  }

  .trigger{
    cursor: pointer !important;
    font-size: 24px;
  }

`;