import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ArrowUpOrganism } from '../../organisms/ArrowUpOrganism/ArrowUpOrganism';

import css from './ArrowUpTemplate.module.css';

function ArrowUpTemplate() {
  const nodeRef = useRef(null);
  const [showArrowUp, setShowArrowUp] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY < 200 ? setShowArrowUp(false) : setShowArrowUp(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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
      <ArrowUpOrganism ref={nodeRef} />
    </CSSTransition>
  );
}

export { ArrowUpTemplate };
