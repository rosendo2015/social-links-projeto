import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
    }
    
    body{
        font-family: 'Inter', sans-serif;
        background-color: ${({ theme }) => theme.COLORS.Off_Black};
        color: ${({ theme }) => theme.COLORS.White};
        -webkit-font-smoothing: antialiased;
    }
    .attribution {
        font-size: 11px;
        margin-bottom: 0.5rem;
    }
    .attribution a {
        text-decoration: none;
        color: hsl(228, 45%, 44%);   
    }
    .attribution a:hover {
        color: ${({theme})=>theme.COLORS.Green};
    }
`;
