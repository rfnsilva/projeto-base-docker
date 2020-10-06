import React, { createContext, useState } from 'react';
import API from '../config/api';

//criar interface/type user aqui
interface User {
  id: string,
  nome: string,
  sobrenome: string,
  telefone: string,
  email: string,
  token: string
}

//interface com todos os dados necessarios
interface AuthContextData {
  signed: boolean;
  user: object | null;
  signUp(user: Object): Promise<User>;
}

//criando context com tipo da interface acima
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

//criando provedor que servirá a aplicação
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  //função que realiza o cadastro
  async function signUp(user: any): Promise<User>{
    const response = await API.post('cadastrar', { user });

    setUser(response.data);

    localStorage.setItem('user', JSON.stringify(response.data));

    return response.data;
  }


  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        signUp
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
