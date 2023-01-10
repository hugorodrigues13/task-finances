import styled from 'styled-components';

export const Container = styled.body`
  display: flex;
  width: 100%;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  position: absolute;
  width: 450px;
  height: 440px;
  max-width: 100%;
  max-height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 1px 1px 15px 1px #ccc;

  .title {
    display: flex;
    position: relative;
    font-size: 18px;
    padding: 12px 0;
    color: #7c7c8a;
    margin-bottom: 20px;
  }
  .email {
    display: flex;
    font-size: 15px;
    padding: 20px 0 8px 0;
    margin-right: 240px;
  }

  .senha {
    display: flex;
    font-size: 15px;
    padding: 20px 0 8px 0;
    margin-right: 310px;
  }

  .textfield {
    display: flex;
    border: 1px solid #a3a3a3;
    height: 40px;
    width: 400px;
    font-weight: 400;
    font-size: 15px;
    justify-content: center;
    margin-bottom: 1vh;
  }

  .ant-input-prefix {
    display: flex;
    font-size: 20px;
    margin-left: 10px;
    padding-right: 10px;
    color: #7c7c8a;
  }

  .signin-button {
    display: flex;
    width: 400px;
    height: 40px;
    margin-top: 40px;
    background-color: #b5334d;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: #fff;
    font-weight: 600;

    :hover {
      background-color: #fff;
      transition: all 0.5s ease-out;
      color: #b5334d;
      border: solid 1px #b5334d;
    }
  }
`;