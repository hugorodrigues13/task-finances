import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

  .ant-table-div{
    display: flex;
    justify-content:  right;
    align-items: center;
  }

  .btn-icons-table-visualizar{
    display: flex;
    margin-right: 20px;
    border-radius: 100%;
    color: #EF00D7;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 45px;
    height: 40px;
    border-radius: 100%;

    --c:  #EF00D7; /* the color*/
  
  box-shadow: 0 0 0 .1em inset var(--c); 
  --_g: linear-gradient(var(--c) 0 0) no-repeat;
  background: 
    var(--_g) calc(var(--_p,0%) - 100%) 0%,
    var(--_g) calc(200% - var(--_p,0%)) 0%,
    var(--_g) calc(var(--_p,0%) - 100%) 100%,
    var(--_g) calc(200% - var(--_p,0%)) 100%;
  background-size: 50.5% calc(var(--_p,0%)/2 + .5%);
  outline-offset: .1em;
  transition: background-size .4s, background-position 0s .4s;

  :hover{
    color: #fff !important;
    --_p: 100%;
  transition: background-position .4s, background-size 0s;
  }
  }
  
  .btn-icons-table-imprimir{
    display: flex;
    margin-right: 20px;
    border-radius: 100%;
    color: #00C0EF;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 45px;
    height: 40px;
    border-radius: 100%;

    --c:  #00C0EF; /* the color*/
  
  box-shadow: 0 0 0 .1em inset var(--c); 
  --_g: linear-gradient(var(--c) 0 0) no-repeat;
  background: 
    var(--_g) calc(var(--_p,0%) - 100%) 0%,
    var(--_g) calc(200% - var(--_p,0%)) 0%,
    var(--_g) calc(var(--_p,0%) - 100%) 100%,
    var(--_g) calc(200% - var(--_p,0%)) 100%;
  background-size: 50.5% calc(var(--_p,0%)/2 + .5%);
  outline-offset: .1em;
  transition: background-size .4s, background-position 0s .4s;

  :hover{
    color: #fff !important;
    --_p: 100%;
  transition: background-position .4s, background-size 0s;
  }
  }


  .btn-icons-table-baixar{
    display: flex;
    width: 45px;
    height: 40px;
    color: #FFB800;
    margin-right: 20px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    padding: 0;

    --c:  #FFB800; /* the color*/
  
  box-shadow: 0 0 0 .1em inset var(--c); 
  --_g: linear-gradient(var(--c) 0 0) no-repeat;
  background: 
    var(--_g) calc(var(--_p,0%) - 100%) 0%,
    var(--_g) calc(200% - var(--_p,0%)) 0%,
    var(--_g) calc(var(--_p,0%) - 100%) 100%,
    var(--_g) calc(200% - var(--_p,0%)) 100%;
  background-size: 50.5% calc(var(--_p,0%)/2 + .5%);
  outline-offset: .1em;
  transition: background-size .4s, background-position 0s .4s;

  :hover{
    color: #fff !important;
    --_p: 100%;
  transition: background-position .4s, background-size 0s;
  }
  }


  .btn-icons-table-editar{
    display: flex;
    width: 45px;
    height: 40px;
    margin-right: 20px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    padding: 0;
    color: #61D4AB;

    --c:  #61D4AB; /* the color*/
  
  box-shadow: 0 0 0 .1em inset var(--c); 
  --_g: linear-gradient(var(--c) 0 0) no-repeat;
  background: 
    var(--_g) calc(var(--_p,0%) - 100%) 0%,
    var(--_g) calc(200% - var(--_p,0%)) 0%,
    var(--_g) calc(var(--_p,0%) - 100%) 100%,
    var(--_g) calc(200% - var(--_p,0%)) 100%;
  background-size: 50.5% calc(var(--_p,0%)/2 + .5%);
  outline-offset: .1em;
  transition: background-size .4s, background-position 0s .4s;

  :hover{
    color: #fff !important;
    --_p: 100%;
  transition: background-position .4s, background-size 0s;
  }
  }


  .btn-icons-table-deletar{
    display: flex;
    width: 45px;
    height: 40px;
    margin-right: 20px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    padding: 0;
    color: #F50000;

    --c:  #F50000; /* the color*/
  
  box-shadow: 0 0 0 .1em inset var(--c); 
  --_g: linear-gradient(var(--c) 0 0) no-repeat;
  background: 
    var(--_g) calc(var(--_p,0%) - 100%) 0%,
    var(--_g) calc(200% - var(--_p,0%)) 0%,
    var(--_g) calc(var(--_p,0%) - 100%) 100%,
    var(--_g) calc(200% - var(--_p,0%)) 100%;
  background-size: 50.5% calc(var(--_p,0%)/2 + .5%);
  outline-offset: .1em;
  transition: background-size .4s, background-position 0s .4s;

  :hover{
    color: #fff !important;
    --_p: 100%;
  transition: background-position .4s, background-size 0s;
  }
  }

.selected-items{
  display: flex;
  justify-content: center;
  align-items: center;
}
`;