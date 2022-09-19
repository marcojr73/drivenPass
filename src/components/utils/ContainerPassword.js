import styled from "styled-components";

export const ContainerPassword = styled.main`

    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-top: 25px;

    li{
        margin-top: 20px;
    }

    p, ul{
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 20px;
        color: #222222;
    }

    .label{
        font-family: 'Recursive';
        font-weight: 700;
        font-size: 20px;
        color: #222222;
    }

    footer{
        display: flex;
        justify-content: space-around
    }

    .back{
        margin-top: 120px;
    }

    .delete{
        margin-top: 100px;
        margin-right: 50px;
        width: 60px;
        height: 60px;
        background-color: #F52424;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        color: #FFFFFF;
    }
`