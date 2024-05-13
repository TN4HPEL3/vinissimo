import { FooterOrganism } from '../../organisms/FooterOrganism/FooterOrganism';

import css from './FooterTemplate.module.css';

function FooterTemplate() {
  return (
    <footer className={css.footer}>
      <FooterOrganism />
    </footer>
  );
}

export { FooterTemplate };
