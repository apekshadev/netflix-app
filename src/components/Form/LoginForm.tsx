import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from './Input';
import { checkValidData } from '../../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../utils/firebase'
import userIcon from '../../assets/userIcon.png'
import { addUser } from '../../redux/slices/userSlice';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null | undefined>(null);
  const handleNavigate = () => {
    setIsSignInForm(!isSignInForm)
    setLoginDetails({
      userName: "",
      email: "",
      password: "",
    })
    setErrorMessage("")
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    let message = checkValidData(loginDetails.email, loginDetails.password);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      // Signed up 
      createUserWithEmailAndPassword(auth, loginDetails.email, loginDetails.password)
        .then((userCredential) => {

          const user = userCredential.user;
          updateProfile(user, {
            displayName: loginDetails.userName, photoURL: userIcon
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser!;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
              setLoginDetails({
                userName: "",
                email: "",
                password: "",
              });
              setIsSignInForm(!isSignInForm);
            })

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(auth, loginDetails.email, loginDetails.password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error:any) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode)
        });

    }

  }
  const handleOnChange = (name: string, value: string) => {
    setLoginDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <div className='absolute w-full md:m-0 md:w-3/12 md:left-1/2 top-40 md:top-1 md:-translate-x-1/2 md:translate-y-1/4
    md:px-8 md:py-16 px-4 py-6 bg-black bg-opacity-75 rounded custom-bg flex flex-col'>
      <h2 className='text-white text-2xl md:text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        {!isSignInForm &&
          <Input
            type='text'
            placeholder='username'
            name='userName'
            value={loginDetails.userName}
            onchange={(value: string) => handleOnChange('userName', value)}
            error={errorMessage} />}

        <Input
          type='text'
          placeholder='Email or phone number'
          name='email'
          value={loginDetails.email}
          onchange={(value: string) => handleOnChange('email', value)}
          error={errorMessage} />

        <Input
          type='password'
          placeholder='Password'
          name='password'
          value={loginDetails.password}
          onchange={(value: string) => handleOnChange('password', value)}
          error={errorMessage} />

        <button type='submit' className='px-16 py-4 my-4 rounded-lg w-full bg-red-600 text-lg text-white'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <div className='my-4 flex justify-between align-middle text-neutral-500'>
          <div className='flex items-center'>
            <input type='checkbox' name='remember' className='w-5 h-5 me-2' />
            <label htmlFor='remember'>Remember Me</label>

          </div>
          <Link to=''>Need help?</Link>

        </div>
        {isSignInForm ? <><p className='text-neutral-500 my-2 mt-12'>New to Netflix? <span onClick={handleNavigate} className='text-white text-lg'> Sign up now.</span></p>
          <p className='text-neutral-500 my-2'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link to=" " className="text-blue-700 underline">Learn more.</Link></p>
        </> : <p className='text-neutral-500 my-2 mt-12'>Already registered? <span onClick={handleNavigate} className='text-white text-lg'> Sign In now.</span></p>}
      </form>
    </div>


  )
}

export default LoginForm
