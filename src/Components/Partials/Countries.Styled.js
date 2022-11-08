import styled from 'styled-components'

export const StyledCountries = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
list-style-type: none;
background-color: white;
border-bottom: 1px solid black;
height: 3rem;
    a{
        text-decoration: none;
        color: black;
    }
    a:hover {
        color: grey;
    }
`