import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Cart from './Cart';
import CartGlobal from './CartGlobal';
import CartGlobalDeath from './CartGlobalDeath';
import SeaCartDeath from './SeaCartDeath';
const CartPage = () => {
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  return (
    <Box mt="72px" paddingTop="35px" bg={bgColor}>
      <Cart />
      <SeaCartDeath />
      <CartGlobal />
      <CartGlobalDeath />
    </Box>
  );
};

export default CartPage;
