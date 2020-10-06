import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from '../src/contexts/authContext'

import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>

        <Component {...pageProps} />
        <GlobalStyles />

      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
