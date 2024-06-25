import { SwitchToENButtonAtom } from '../../atoms/SwitchToENButtonAtom/SwitchToENButtonAtom.jsx';
import { OpenMobileMenuButtonAtom } from '../../atoms/OpenMobileMenuButtonAtom/OpenMobileMenuButtonAtom.jsx';

import css from './MobileNavigationOrganism.module.css';

function MobileNavigationOrganism() {
  return (
    <div className={[css['header--mobile']]}>
      <SwitchToENButtonAtom />
      <OpenMobileMenuButtonAtom />
    </div>
  );
}

export { MobileNavigationOrganism };
