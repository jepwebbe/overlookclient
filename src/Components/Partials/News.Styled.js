import styled from 'styled-components'

export const StyledNews = styled.section `
div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 5rem;
    margin: 0 auto;
    object-fit: fill;

    h3 {
        a {
            color: #373535;
            text-decoration: none;
        }
    }
    img {
    }
}
`

