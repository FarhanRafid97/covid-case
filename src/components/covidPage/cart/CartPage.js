import { Box } from '@chakra-ui/react';
import React from 'react';
import Cart from './Cart';
import CartGlobal from './CartGlobal';
import CartGlobalDeath from './CartGlobalDeath';
import SeaCartDeath from './SeaCartDeath';
const CartPage = () => {
  return (
    <Box>
      <Cart />
      <SeaCartDeath />
      <CartGlobal />
      <CartGlobalDeath />
    </Box>
  );
};

export default CartPage;
