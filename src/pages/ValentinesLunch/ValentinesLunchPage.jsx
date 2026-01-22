import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { mobileMenuContext } from '../../helpers/mobileMenuProvider.jsx';
import { ValentinesLunchTemplate } from './ValentinesLunchTemplate/ValentinesLunchTemplate.jsx';
import { ArrowUpTemplate } from '../../components/templates/ArrowUpTemplate/ArrowUpTemplate.jsx';

import css from '../NewYear/NewYearPage.module.css';

function ValentinesLunchPage() {
  const { isOpen } = useContext(mobileMenuContext);
  return (
    <div className={css.newYear}>
      <ValentinesLunchTemplate />
      {!isOpen && <ArrowUpTemplate />}
      <Outlet />
    </div>
  );
}

export { ValentinesLunchPage };
