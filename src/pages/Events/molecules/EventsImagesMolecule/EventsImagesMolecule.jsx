import { publicAccess } from '../../../../helpers/publicAccess.js';

import css from './EventsImagesMolecule.module.css';

function EventsImagesMolecule() {
  return (
    <>
      <img
        className={[css['events__content__image']]}
        src={publicAccess('/Frame6.png')}
        alt={'A restaurant table.'}
      />
      <></>
      <img
        className={[css['events__content__image']]}
        src={publicAccess('/VIPr.jpeg')}
        alt={'A restaurant table.'}
      />
    </>
  );
}

export { EventsImagesMolecule };
