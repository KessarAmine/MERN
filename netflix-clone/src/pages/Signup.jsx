import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundImage from '../componenets/BackgroundImage';
import Header from '../componenets/Header';
import { firebaseAuth } from './../utils/firebase-config';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setformValue] = useState({
    email: "",
    password: "",
  });
  const hanldeSignUp = async()=>{
    // console.log(formValues);
    try
    {
      const {email, password} = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  }
onAuthStateChanged(firebaseAuth,(currentUser)=>{
  if(currentUser) navigate("/");
});
  return (
    <Container showPassword={showPassword}>
      <BackgroundImage/>
      <div className="content">
        <Header login/>
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited Movies and TvShows and more</h1>
            <h4>Watch Anyway cancel any time</h4>
            <h6>Ready to watch ? Enter your email or restart your membership</h6>
          </div>
          <div className="form">
            <input type="email" placeholder='Email adresse' name='email' value={formValues.email} 
              onChange={(e)=>
                setformValue({
                  ...formValues,
                  [e.target.name] : e.target.value,
                })
              } required/> 
            {
              showPassword && 
              <input type="password" placeholder='Password' name='password' value={formValues.password}
              onChange={(e)=>
                setformValue({
                  ...formValues,
                  [e.target.name] : e.target.value,
                })
              } required/>
            }
            {
              !showPassword && 
              <button onClick={()=> setShowPassword(true)}>Get Started</button>
            }
          </div>
          <button onClick={hanldeSignUp}>Sign Up</button>
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
.body
{
  gap: 1rem;
  .text
  {
    gap: 1rem;
    align: center;
    font-size: 1.7rem;
    h1, h4, h6{
      padding: 0 25rem;
    }
  }
  .form
  {
    display : grid;
    width : 55%;
    input
    {
      background:rgba(255,255,255, 0.8);
      border: none;
      margin : 1px;
      padding : 1.0rem;
      font-size: 1.2rem;
      border: 1px solid black;
      border-color : rgba(255,255,255, 0.1);
      &:focus
      {
        outline : none;
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
  button
  {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
}`;