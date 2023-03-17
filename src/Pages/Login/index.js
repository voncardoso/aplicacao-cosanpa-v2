import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { BackgroundImg, FormLogin, InfoLogin, LoginContainer } from "./style";


export function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [alert, setAlert] = useState(false)
  const [reload, setReload] = useState(false)


  const navigate = useNavigate()

  function handleNewLogin(event){
    event.preventDefault();
    const auth = getAuth();
    setReload(true)
    signInWithEmailAndPassword(auth, email, password)
        .then((useCredential) => {
            const user = useCredential.user
            if(user){
                window.localStorage.setItem("token", user.refreshToken)
                navigate("/contratos")
            }
        }).catch((error) => {
            setAlert(true)
            setReload(false)
            console.log("error")
          });
  }

  return (

    <LoginContainer>
      <InfoLogin>
        <div>
          <img src={logo} alt="" />
        </div>
        <FormLogin action="" onSubmit={handleNewLogin}>
          <h1>Login</h1>
          <label htmlFor="" >E-mail</label>
          <input 
            type="text" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="">Senha</label>
          <input 
            type="password" 
            onChange={(event) => setPassword(event.target.value)}  
          />
          {reload ? 
              <button disabled >Entrando...</button>
                :
              <button type="submit">Entrar</button>
           }
        </FormLogin>
      </InfoLogin>

      <BackgroundImg></BackgroundImg>
    </LoginContainer>
  );
}
