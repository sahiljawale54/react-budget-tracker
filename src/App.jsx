import styled from "styled-components";
import Home from "./Components/Home/Home";

const Container = styled.div`
  display : flex;
  flex-direction :column;
  height : 100vh;
  margin: 0 10px;
  justify-content : center;
  align-items : center;
  justify-content : center;
  font-family: Montserrat;
  
`;

const Header = styled.span`
  color : black;
  font-size:25px;
  font-weight : bold;
`;

function App() {
  
  return (
    <Container>
      <Header>Budget Tracker</Header>
      <Home/>
    </Container>
  )
}

export default App
