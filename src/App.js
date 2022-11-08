import './App.scss';
import { Router } from './Components/App/Router/Router';
import { StyledMain } from './Components/Main.Styled';
import Header from './Components/Partials/Header';

function App() {
  return (
    <>
      <Header />
      <StyledMain>
        <Router />
      </StyledMain>
    </>
  );
}

export default App;
