import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
  height: 5rem;
  div {
    flex: 2;
    a {
      img {
        width: 50%;
      }
    }
  }
  nav {
    flex: 3;
    ul {
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
`;
