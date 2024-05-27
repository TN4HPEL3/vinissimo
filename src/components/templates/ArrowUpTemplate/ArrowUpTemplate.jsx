import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ArrowUpOrganism } from '../../organisms/ArrowUpOrganism/ArrowUpOrganism.jsx';

import css from './ArrowUpTemplate.module.css';

function ArrowUpTemplate() {
  const [showArrowUp, setShowArrowUp] = useState(false);
  window.onscroll = () => {
    window.scrollY < 200 ? setShowArrowUp(false) : setShowArrowUp(true);
  };

  return (
    <CSSTransition
      in={showArrowUp}
      timeout={600}
      classNames={{
        enter: css['button__arrow--up-enter'],
        enterActive: css['button__arrow--up-enter-active'],
        exit: css['button__arrow--up-exit'],
        exitActive: css['button__arrow--up-exit-active'],
      }}
      unmountOnExit
    >
      <ArrowUpOrganism />
    </CSSTransition>
  );
}

export { ArrowUpTemplate };
