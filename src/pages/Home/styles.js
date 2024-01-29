import styled from 'styled-components'

export const Container = styled.div`
margin: 6rem auto;
text-align: center;
width: 375px;
height: 700px;

border-radius: 16px;
padding: 3rem 1rem;
background: ${({theme})=>theme.COLORS.Dark_Grey};
img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 2rem;
}
main{
    display: flex;
    flex-direction: column;
}
`