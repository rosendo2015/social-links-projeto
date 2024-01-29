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
`;
