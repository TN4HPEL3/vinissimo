import { Outlet } from 'react-router-dom';

import { NewYearTemplate } from './templates/NewYearTemplate.jsx';

import css from './NewYearPage.module.css';

function NewYearPage() {
  return (
    <div className={css.newYear}>
      <NewYearTemplate />
      <Outlet />
    </div>
  );
}

export { NewYearPage };
