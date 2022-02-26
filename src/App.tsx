import React from 'react';
import './App.css';
import theme from './theme/theme';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Router } from './router/Router';
import { HeaderLayout } from './components/templates/HeaderLayout';

function App() {
  return (
<ChakraProvider theme={theme}>
    <BrowserRouter>
      <HeaderLayout>
        <Router />
      </HeaderLayout>
    </BrowserRouter>
</ChakraProvider>
  );
}

export default App;
