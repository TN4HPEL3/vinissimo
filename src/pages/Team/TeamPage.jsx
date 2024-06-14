import { useContext } from 'react';

import { TeamPageTemplate } from './templates/TeamPageTemplate.jsx';
import { mobileMenuContext } from '../../helpers/mobileMenuProvider.jsx';
import { ArrowUpTemplate } from '../../components/templates/ArrowUpTemplate/ArrowUpTemplate.jsx';

function TeamPage() {
  const { isOpen } = useContext(mobileMenuContext);
  return (
    <>
      <TeamPageTemplate />
      {!isOpen && <ArrowUpTemplate />}
    </>
  );
}

export { TeamPage };
