import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { CateringTemplate } from './Template/CateringTemplate.jsx';
import { mobileMenuContext } from '../../helpers/mobileMenuProvider.jsx';
import { ArrowUpTemplate } from '../../components/templates/ArrowUpTemplate/ArrowUpTemplate.jsx';

import css from '../NewYear/NewYearPage.module.css';

function CateringPage() {
  const { isOpen } = useContext(mobileMenuContext);
  return (
    <div className={css.newYear}>
      <CateringTemplate />
      {!isOpen && <ArrowUpTemplate />}
      <Outlet />
    </div>
  );
}

export { CateringPage };
