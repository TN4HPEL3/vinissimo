import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { PopUpTemplate } from './PopUpTemplate/PopUpTemplate.jsx';
import { mobileMenuContext } from '../../helpers/mobileMenuProvider.jsx';
import { ArrowUpTemplate } from '../../components/templates/ArrowUpTemplate/ArrowUpTemplate.jsx';

import css from './PopUpPage.module.css';

function PopUpPage() {
  const { isOpen } = useContext(mobileMenuContext);
  return (
    <div className={css.container}>
      <PopUpTemplate />
      {!isOpen && <ArrowUpTemplate />}
      <Outlet />
    </div>
  );
}

export { PopUpPage };
