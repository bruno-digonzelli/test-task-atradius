import React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import { IThemeProvider } from 'domain/entities';

const ThemeProvider = ({ children }: IThemeProvider): JSX.Element => {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  )
}

export default ThemeProvider