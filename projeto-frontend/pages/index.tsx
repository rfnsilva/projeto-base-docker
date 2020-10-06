import React from 'react';
import Head from 'next/head';

import Cadastro from '../src/components/Cadastro'

import { Container } from '../src/styles/pages/Home';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <h1>Cadastro</h1>

      <Cadastro />

    </Container>
  )
}

