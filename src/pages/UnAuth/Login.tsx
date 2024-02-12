import React from 'react'
import LoginForm from '../../components/Form/LoginForm'
import Header from '../../components/Header'
const Login = () => {
  return (<div className='md:absolute w-full h-full z-2'>
    {/* <Header /> */}
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/fec9ccd8-dd33-4c12-98ab-498f077ff6b3/AE-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg'
      alt='login-background'
      className='absolute w-full h-full'
    />
    <LoginForm />
  </div>

  )
}

export default Login