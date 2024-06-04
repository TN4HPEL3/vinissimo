import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ArrowUpOrganism } from '../../organisms/ArrowUpOrganism/ArrowUpOrganism';

import css from './ArrowUpTemplate.module.css';

function ArrowUpTemplate() {
  const nodeRef = React.useRef(null);
  // const nodeRef = React.createRef();
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
      nodeRef={nodeRef}
    >
      <ArrowUpOrganism />
    </CSSTransition>
  );
}

export { ArrowUpTemplate };
