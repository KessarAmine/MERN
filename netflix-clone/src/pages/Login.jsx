import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundImage from '../componenets/BackgroundImage';
import Header from '../componenets/Header';
import { firebaseAuth } from './../utils/firebase-config';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();
  const [formValues, setformValue] = useState({
    email: "",
    password: "",
  });
  const hanldeSignIn = async()=>{
    // console.log(formValues);
    try
    {
      const {email, password} = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  }
onAuthStateChanged(firebaseAuth,(currentUser)=>{
  if(currentUser) navigate("/");
});
  return (
    <Container>
     <BackgroundImage/>
     <div className="content">
      <Header/>
      <div className="form-container flex column a-center j-center">
        <div className="form flex column a-center j-center">
          <div className="strip-home-title">
            <h3>LogIn</h3>
          </div>
          <div className="container flex column">
            <input type="email" placeholder='Email adresse' name='email' value={formValues.email} 
                onChange={(e)=>
                  setformValue({
                    ...formValues,
                    [e.target.name] : e.target.value,
                  })
                } required/> 
                <input type="password" placeholder='Password' name='password' value={formValues.password}
                onChange={(e)=>
                  setformValue({
                    ...formValues,
                    [e.target.name] : e.target.value,
                })
                } required/>
                <button onClick={hanldeSignIn}>LogIn</button>
          </div>
        </div>
      </div>
     </div>
    </Container>
  )
}

const Container = styled.div`
position: relative;
.content{
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 15vh 85vh;
}
.form-container{
  gap: 2rem;
  align-self: center;
  border-radius : 10px;
  height: 85vh;
  .form{
    padding: 2rem;
    background-color: #000000b0;
    gap: 2rem;
    color: white;
    width: 25vw;
  }
  .container{
    gap : 2rem;
    input
    {
      background:rgba(255,255,255, 0.8);
      border: none;
      border-radius: 15px;
      margin : 0.5px;
      padding : 1rem;
      font-size: 1rem;
      border: 0.5px solid black;
      border-color : rgba(255,255,255, 0.1);
      &:focus
      {
        outline : none;
      }
    }
  }
  button
  {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: bolder;
    font-size: 1.05rem;
  }
}
`;