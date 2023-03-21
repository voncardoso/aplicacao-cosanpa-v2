import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./config/firebase"
import { Router } from "./Router";
import { GlobalStyle } from "./style/Global";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  useEffect(() =>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
    });
  }, [])
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
