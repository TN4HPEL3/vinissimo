import { useContext } from 'react';

import { Outlet } from 'react-router-dom';
import { mobileMenuContext } from '../../helpers/mobileMenuProvider.jsx';
import { ArrowUpTemplate } from '../../components/templates/ArrowUpTemplate/ArrowUpTemplate.jsx';

function WinePage() {
  const { isOpen } = useContext(mobileMenuContext);
  return (
    <>
      <Outlet />
      {!isOpen && <ArrowUpTemplate />}
    </>
  );
}

export { WinePage };
