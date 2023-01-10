import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;font-family: 'Poppins', sans-serif !important;
  };

  html, body {
    width: 100%;
    height: 100vh;
    
  };

  html {
    @media(max-width: 1000px) {
      font-size: 93.75%;
    }
    @media(max-width: 720px) {
      font-size: 87.5%; 
    }
  }

  body {
    font-family: 'Poppins', sans-serif !important;
  }


  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  .ant-layout-header{
    background-color: #B5334D !important;
  }

  /* Menu lateral aberto */
 .ant-layout-sider{
    background-color: #B5334D !important;
    flex: 0 0 250px !important;
    max-width: 300px !important;
  }

   /* Menu lateral fechado */
  .ant-layout-sider-collapsed{
    flex: 0 0 80px !important;
    max-width: 80px !important;
  }

  .ant-menu-inline{
    background-color: #B5334D !important;
  }

  .ant-menu-inline-collapsed{
    background-color: #B5334D !important;
  }

 .ant-menu-item-selected {
  background-color: #662a34 !important;
  color: #fff !important;
 }

 .ant-menu-title-content{
  color: #fff;
  font-weight: 600;
 }

 .ant-menu-item{
  color: #fff;
  
 }

 .ant-menu{
  color: #fff;
  background-color: #B5334D !important;
  font-weight: 400;
  font-size: 16px;
  
 }

 .ant-menu-item-active{
  color: #fff !important;
  
 }

 .ant-menu-submenu{
  color: #fff !important;
  font-weight: 600;
  font-size: 16px;
 }

 .ant-menu-submenu-inline{
  color: #fff !important;
 }

 .ant-menu-submenu-selected{
    color: #fff !important;
 }

 .ant-menu-submenu-open{
  color: #fff !important;
  border-bottom: 1px solid;
  
 }

 .ant-menu-submenu-active{
  color: #fff !important;
  
 }

 .ant-menu-submenu-title{
  color: #fff !important;
 }

 .ant-menu-item-only-child{
  display: flex;
  font-size: 14px;
  height: 30px !important;
  border: none;
 }

 .ant-btn-primary{
  margin-top: 50px;
  width: 140px;
  justify-content: center;
  background-color: #388862;
 }

 .ant-btn-default{
  margin-top: 50px;
  width: 140px;
  justify-content: center;
 }

 .ant-modal-footer{
  display: flex;
  justify-content: center;
  flex-direction: row;
 }

 .ant-checkbox-wrapper{
  margin-bottom: 40px;
 }

 .ant-modal-title{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px !important;
  margin-bottom: 20px !important;
 }

 .ant-modal-body{
  height: 60vh;
  width: 67vh;
  margin-right: 10vh !important;
  padding-right: 10px;
  overflow-x: hidden;
 }

 .ant-modal-content{
  align-items: center;
  width: 70vh;
 }

 .ant-modal-wrap{
    padding-right: 12vh;

 }

`;
