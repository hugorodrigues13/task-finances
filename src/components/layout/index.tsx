import React, { ReactNode } from "react";

import Dashboard from '../../pages/Dashboard'
import Auth from '../../pages/Auth'

interface BaseLayoutProps {
    children?: ReactNode;
  }

const Layout: React.FC<BaseLayoutProps> = ({children}) => {
    return (
        <>
            <Auth>
                {children}
            </Auth>
            
        </> 
    );
  }
  
  export default Layout;
  