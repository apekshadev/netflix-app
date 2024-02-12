import React, { ReactNode } from 'react';
import Header from '../components/Header';
type AuthLayoutProps = {
    children: ReactNode;
  };
const AuthLayout:React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default AuthLayout;