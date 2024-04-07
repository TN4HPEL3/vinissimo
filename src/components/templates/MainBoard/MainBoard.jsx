import { Section } from '../Section/Section.jsx';

import css from './MainBoard.module.css';

function MainBoard() {
  return (
    <Section>
      <img
        className={css.mainBoard__image}
        style={{ width: '100vw', height: '100vh', background: 'white' }}
        src="path_to_image"
        alt="Main billboard"
      />
    </Section>
  );
}

export { MainBoard };