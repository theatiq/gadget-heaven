import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeTitles = {
  '/': 'Home',
  '/category': 'GadgetCards',
  '/statistics': 'Statistics',
  '/dashboard': 'Dashboard',
  '/preOrder': 'PreOrder',
};

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = routeTitles[location.pathname] || 'Gadget Heaven';
    document.title = `${pageTitle} | Gadget Heaven`;
  }, [location.pathname]);

  return null; 
};

export default DynamicTitle;
