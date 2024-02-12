
export const checkValidData = (email: string, password: string): string | null => {
    const isEmailValid: boolean = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid: boolean = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
  
    if (!isEmailValid) return "Email ID is not Valid";
    if (!isPasswordValid) return "Password length must be 8 characters";
  
    return null;
  };
  