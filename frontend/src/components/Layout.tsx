// Layout.tsx
import React, { useState } from 'react';
import CustomAppBar from './AppBar';
import CustomDrawer from './Drawer';
import { mainListItems, secondaryListItems } from './listItems';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <CustomAppBar open={open} toggleDrawer={toggleDrawer} />
      <CustomDrawer open={open} toggleDrawer={toggleDrawer} mainListItems={mainListItems} secondaryListItems={secondaryListItems} />
      {children}
    </div>
  );
};

export default Layout;
