import { useContext } from 'react';

import { Outlet } from 'react-router-dom';
import { mobileMenuContext } from '../../helpers/mobileMenuProvider.jsx';
import { ArrowUpTemplate } from '../../components/templates/ArrowUpTemplate/ArrowUpTemplate.jsx';
import { PopUpMenuTemplate } from '../../components/templates/PopUpMenuTemplate/PopUpMenuTemplate.jsx';

function PopUpPage() {
  const { isOpen } = useContext(mobileMenuContext);
  return (
    <>
      <PopUpMenuTemplate />
      <Outlet />
      {!isOpen && <ArrowUpTemplate />}
    </>
  );
}

export { PopUpPage };
