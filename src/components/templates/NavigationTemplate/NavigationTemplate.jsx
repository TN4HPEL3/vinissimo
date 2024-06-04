import { NavigationListOrganisms } from '../../organisms/NavigationListOrganisms/NavigationListOrganisms.jsx';

import css from './NavigationTemplate.module.css';

function NavigationTemplate() {
  return (
    <div className={css.header}>
      <NavigationListOrganisms />
    </div>
  );
}

export { NavigationTemplate };
