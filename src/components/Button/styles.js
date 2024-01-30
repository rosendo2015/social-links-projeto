import styled from "styled-components";
export const Container=styled.button`
width: 100%;
background: ${({theme})=>theme.COLORS.Grey};
padding: 1rem;
border-radius: 10px;
border: none;
color: ${({theme})=>theme.COLORS.White};
margin-bottom: 1rem;
cursor: pointer;
&&:hover{
    background: ${({theme})=>theme.COLORS.Green};
    color: ${({theme})=>theme.COLORS.Dark_Grey};

}
`