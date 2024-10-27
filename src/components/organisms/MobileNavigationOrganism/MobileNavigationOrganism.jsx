import { SwitchLanguageButtonAtom } from '../../atoms/SwitchLanguageButtonAtom/SwitchLanguageButtonAtom.jsx';
import { OpenMobileMenuButtonAtom } from '../../atoms/OpenMobileMenuButtonAtom/OpenMobileMenuButtonAtom.jsx';

import css from './MobileNavigationOrganism.module.css';

function MobileNavigationOrganism() {
  return (
    <div className={[css['header--mobile']]}>
      <SwitchLanguageButtonAtom />
      <OpenMobileMenuButtonAtom />
    </div>
  );
}

export { MobileNavigationOrganism };
