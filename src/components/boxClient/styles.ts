import styled from 'styled-components';

export const Container = styled.body`
    display: flex;
    width: 100%;
    height: 100%;

    .boxAll{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: top;
    }

.retangulo{
    display: flex;
    background-color: #fff;
    width: 320px;
    height: 100px;
    margin-right: 30px;
    box-shadow: 0px 0px 5px 0px #bbb;
    margin-top: 30px;
}

.quadrado{
    display: flex;
    position: absolute;
    width: 80px;
    height: 70px;
    margin-bottom: 80px;
    margin-left: 20px;
    background-color: #388862;
}
.quadrado2{
    display: flex;
    position: absolute;
    width: 80px;
    height: 70px;
    margin-bottom: 80px;
    margin-left: 20px;
    background-color: #008CFF;
}
.quadrado3{
    display: flex;
    position: absolute;
    width: 80px;
    height: 70px;
    margin-bottom: 80px;
    margin-left: 20px;
    background-color: #FFB800;
}
.quadrado4{
    display: flex;
    position: absolute;
    width: 80px;
    height: 70px;
    margin-bottom: 80px;
    margin-left: 20px;
    background-color: #CC3333;
}


.icons{
    color: #fff;
    width: 100%;
    height: 100%;
}

.title{
    display: flex;
    width: 100%;
    align-items: top;
    justify-content: right;
    margin-top: 10px;
    margin-right: 20px;
    font-size: 20px;
}

.preco{
    display: flex;
    width: 100%;
    justify-content: right;
    align-items: center;
    font-size: 30px;
    margin-right: 20px;
    font-weight: 600;
    margin-top: 10px;
}

`;