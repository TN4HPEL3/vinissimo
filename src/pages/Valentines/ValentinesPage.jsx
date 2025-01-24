import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { ValentinesTemplate } from './templates/ValentineTemplate.jsx';
import { mobileMenuContext } from '../../helpers/mobileMenuProvider.jsx';
import { ArrowUpTemplate } from '../../components/templates/ArrowUpTemplate/ArrowUpTemplate.jsx';

import css from '../NewYear/NewYearPage.module.css';

function ValentinesPage() {
  const { isOpen } = useContext(mobileMenuContext);
  return (
    <div className={css.newYear}>
      <ValentinesTemplate />
      {!isOpen && <ArrowUpTemplate />}
      <Outlet />
    </div>
  );
}

export { ValentinesPage };
