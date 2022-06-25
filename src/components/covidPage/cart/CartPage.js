import React from 'react';
import { Box } from '@chakra-ui/react';
import Cart from './Cart';
import CartGlobal from './CartGlobal';
import SeaCartDeath from './SeaCartDeath';
import CartGlobalDeath from './CartGlobalDeath';
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
