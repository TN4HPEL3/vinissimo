import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { NewYearTemplate } from './templates/NewYearTemplate.jsx';
import { mobileMenuContext } from '../../helpers/mobileMenuProvider.jsx';
import { ArrowUpTemplate } from '../../components/templates/ArrowUpTemplate/ArrowUpTemplate.jsx';

import css from './NewYearPage.module.css';

function NewYearPage() {
  const { isOpen } = useContext(mobileMenuContext);
  return (
    <div className={css.newYear}>
      <NewYearTemplate />
      {!isOpen && <ArrowUpTemplate />}
      <Outlet />
    </div>
  );
}

export { NewYearPage };
