import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius:10px;
    padding: 20px;
    margin-top:20px;
    display: flex;
    justify-content:space-between;
    input, select{
        border: 1px solid #ccc;
        border-radius:20px;
        width: 200px;
        height: 40px;
        margin-right: 20px;
        padding-left: 10px;
        background-color: #fff;
    }

    button{ 
        background:#7272f2;
        color: #fff;
        width: 200px;
        border-radius: 20px;
        border: none;
        transition: .3s;
        cursor: pointer;
        &:hover{
            box-shadow: 0px 0px 12px rgba(0,0,0,0.4);
            background:#6060c4;
        }
    }
`