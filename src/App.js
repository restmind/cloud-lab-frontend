import "./App";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { StyledApp } from "./App.styled.js";



function App() {
  return (
    <StyledApp>
        <div style={{ }}>
          <Header />
          <Content />
          <Footer />
        </div>
      </StyledApp>
  );
}

export default App;