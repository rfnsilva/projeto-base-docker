import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import API from '../../src/config/api';
import { useRouter } from 'next/router';

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await API.get(`getUsers`);
  const data = await response.data;

  const paths = data.map(user => {
    return { params: { principal: user.id } }
  });

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { principal } = context.params;

  const response = await API.get(`getUser/${principal}`);
  const data = await response.data;

  return {
    props: {
      user: data,
    },
    revalidate: 20,
  }
}

export default function Principal({ user }) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>; //caso tente acessar uma pagina q nao foi gerada na build aparece esse carregando
  }
  return (
    <>
      <h1>{user.nome}</h1>
      <h2>{user.email}</h2>
    </>
  )
}
