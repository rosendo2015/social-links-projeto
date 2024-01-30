import styled from 'styled-components'

export const Container = styled.div`
margin: 6rem auto;
text-align: center;
width: 375px;
height: 700px;

border-radius: 16px;
padding: 3rem 1.7rem;
background: ${({theme})=>theme.COLORS.Dark_Grey};



header img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 2rem;
}
header h2{
    margin-bottom: 1rem;
}
header p{
    color: ${({theme})=>theme.COLORS.Green};
    font-weight: 700;
    margin-bottom: 2rem;
}
header{
    padding-bottom: 1.7rem;
}
main{
    display: flex;
    flex-direction: column;
}
`