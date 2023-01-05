import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';
import { Box } from './Box';

export const Layout = () => {
  return (
    <Box>
      <AppBar />
      <Box p={3}>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};
