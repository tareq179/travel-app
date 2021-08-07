import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? "#F26A2E" : "#077BF1")};
    white-space: nowrap;
    padding: ${({big})=>(big ? "16px 40px" : "10px 36px")};
    color: #fff;
    font-size: ${({big})=>(big ? "20px" : "16px")};
    outline: none;
    border: none;
    border-radius: ${({round})=>(round ? "50px" : "none")};
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    
    &:hover{
        background: ${({primary}) => (primary ? "#077BF1" : "#F26A2E")};   
        transform: translateY(-2px);
    }
`