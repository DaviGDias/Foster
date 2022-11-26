import Link from "next/link";
import styled from "styled-components";

export const Button = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 260px;
    height: 50px;
    border: 1px solid #fff;
    color: #fff;
    font-weight: 600;

    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s; 

    &:hover{
        background: #fff;
        color: black;
    }
`;