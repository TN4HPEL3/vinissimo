import { useState } from 'react';

import { ArrowUpOrganism } from '../../organisms/ArrowUpOrganism/ArrowUpOrganism';

function ArrowUpTemplate() {
  const [showArrowUp, setShowArrowUp] = useState(false);
  window.onscroll = () => {
    window.scrollY < 200 ? setShowArrowUp(false) : setShowArrowUp(true);
  };

  return <ArrowUpOrganism isVisible={showArrowUp} />;
}

export { ArrowUpTemplate };
