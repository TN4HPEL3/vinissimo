import { useContext } from 'react';

import { Outlet } from 'react-router-dom';
import { mobileMenuContext } from '../../helpers/mobileMenuProvider.jsx';
import { ArrowUpTemplate } from '../../components/templates/ArrowUpTemplate/ArrowUpTemplate.jsx';
import { WineDegustationTemplate } from '../../components/templates/WineDegustationTemplate/WineDegustationTemplate.jsx';

function WineDegustationPage() {
  const { isOpen } = useContext(mobileMenuContext);
  return (
    <>
      <WineDegustationTemplate />
      <Outlet />
      {!isOpen && <ArrowUpTemplate />}
    </>
  );
}

export { WineDegustationPage };
