import styled from "styled-components"

export const ContainerLogin = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 100px;
        margin-top: 30px;
    }

    h1{
        font-size: 36px;
        color: #005985;
        font-family: 'Righteous', cursive;
    }

    p{
        margin-top: 16px;
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
    }

    input, .button{
        width: 250px;
        height: 40px;
        border-radius: 5px;
        margin-bottom: 15px;
        margin-top: 5px;
        margin-top: 10px;
        font-family: 'Recursive', sans-serif;
    }
    
    .button{
        margin-top: 25px;
        background-color: #9BFBB0;
        border: 3px solid #9BFBB0;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
    }
    
    input{
        border: 3px solid #005985;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        background: #FFFFFF;
    }

    a{
        font-size: 18px;
        color: black;
        margin-top: 100px;
    }

    .back{
        display: flex;
        border: 3px solid #FB9B9B;
        justify-content: center;
        align-items: center;
        background-color: #FB9B9B;
    }

`