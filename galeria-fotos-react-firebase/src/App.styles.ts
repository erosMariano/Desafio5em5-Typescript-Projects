import styled from "styled-components";

export const Container = styled.div`
    background: #27282F;
    color: #fff;
    min-height: 100vh;
    font-family: "Poppins";   
`

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`
export const Header = styled.h1`
 
    text-align: center;
`


export const ScreenWarning = styled.div`
    text-align: center;

    .emoji{
        font-size: 50px;
        margin-bottom: 20px;
    }
`

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

`

export const UploadForm = styled.form`
    background-color: #3d3f43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom:30px;

    input[type="submit"]{
        background-color: #756df4;
        border: 0;
        color: #fff;
        padding: 9px 16px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;
        transition: .3s;


        &:hover{
            opacity: .9;
        }
    }
`