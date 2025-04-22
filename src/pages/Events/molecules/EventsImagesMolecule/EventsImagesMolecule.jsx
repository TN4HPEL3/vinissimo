import { publicAccess } from '../../../../helpers/publicAccess.js';

import css from './EventsImagesMolecule.module.css';

function EventsImagesMolecule() {
  return (
    <>
      <img
        className={[css['events__content__image']]}
        src={publicAccess('/Frame5.png')}
        alt={'A restaurant table.'}
      />
      <img
        className={[css['events__content__image']]}
        src={publicAccess('/VIP.jpeg')}
        alt={'A restaurant table.'}
      />
    </>
  );
}

export { EventsImagesMolecule };
