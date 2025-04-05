import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { EasterTemplate } from './Template/EasterTemplate.jsx';
import { mobileMenuContext } from '../../helpers/mobileMenuProvider.jsx';
import { ArrowUpTemplate } from '../../components/templates/ArrowUpTemplate/ArrowUpTemplate.jsx';

import css from '../NewYear/NewYearPage.module.css';

function EasterPage() {
  const { isOpen } = useContext(mobileMenuContext);
  return (
    <div className={css.newYear}>
      <EasterTemplate />
      {!isOpen && <ArrowUpTemplate />}
      <Outlet />
    </div>
  );
}

export { EasterPage };
