import { useContext } from 'react';

import { EventsTemplate } from './templates/EventsTemplate.jsx';
import { mobileMenuContext } from '../../helpers/mobileMenuProvider.jsx';
import { ArrowUpTemplate } from '../../components/templates/ArrowUpTemplate/ArrowUpTemplate.jsx';

function EventsPage() {
  const { isOpen } = useContext(mobileMenuContext);
  return (
    <>
      <EventsTemplate />
      {isOpen || <ArrowUpTemplate />}
    </>
  );
}

export { EventsPage };
