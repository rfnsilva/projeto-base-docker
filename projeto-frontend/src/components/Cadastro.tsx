import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';

import AuthContext from '../contexts/authContext';

import { MenuForm, Container } from '../styles/pages/Cadastro';

const Cadastro: React.FC = () => {
  const [ nome, setNome ] = useState<string>();
  const [ sobrenome, setSobrenome ] = useState<string>();
  const [ telefone, setTelefone ] = useState<string>();
  const [ email, setEmail ] = useState<string>();
  const [ senha, setSenha ] = useState<string>();
  const [ confirmaSenha, setConfirmaSenha ] = useState<string>();

  //context com a metodo que sera usado para realizar o cadastro
  const { signUp } = useContext(AuthContext);

  const router = useRouter();

  //subimit form
  const SubmitForm = async () => {
    const user = {
      nome: nome,
      sobrenome: sobrenome,
      telefone: telefone,
      email: email,
      senha: senha,
      confirmaSenha: confirmaSenha
    };

    try{
      const response = await signUp(user);

      //se o cadastro for feito com sucesso redireciona para a page home
      if(response !== null){
        router.push(`/login/${response.id}`)

        console.log('sucesso ao cadastrar')
      }
      else{
        console.log('erro ao cadastrar !')
      }
    } catch(error){
      console.log(error)
    }

  };

  return (
    <Container>

      <h3>Informe seus dados</h3>

      <MenuForm>

        <input type="text" placeholder="nome" onChange={e => setNome(e.target.value)} />
        <input type="text" placeholder="sobrenome" onChange={e => setSobrenome(e.target.value)} />
        <input type="text" placeholder="telefone" onChange={e => setTelefone(e.target.value)} />
        <input type="email" placeholder="email pessoal" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="senha" onChange={e => setSenha(e.target.value)} />
        <input type="password" placeholder="confirmar senha" onChange={e => setConfirmaSenha(e.target.value)} />
        <p>
          Ao se cadastrar você automaticamente concorda com nossos <a href="/termos">Termos de Uso</a>
        </p>

        <button onClick={SubmitForm} type="submit">Cadastrar</button>

      </MenuForm>
    </Container>
  );
}

export default Cadastro;
