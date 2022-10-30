import React from 'react'
import { Text as ChakraText, TextProps } from '@chakra-ui/react';

const Text = (props: TextProps): JSX.Element => {
  const { children } = props;

  return (
    <ChakraText {...props}>
      {children}
    </ChakraText>
  )
}

export default Text