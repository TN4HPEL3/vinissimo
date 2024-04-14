import { Page404Organism } from '../organisms/Page404Organism';

import css from './Page404Template.module.css';

function Page404Template() {
  return (
    <div className={css.page404Template}>
      <Page404Organism />
    </div>
  );
}

export { Page404Template };
