import { BrowserRouter } from "react-router-dom";
import "./config/firebase"
import { Router } from "./Router";
import { GlobalStyle } from "./style/Global";


function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
