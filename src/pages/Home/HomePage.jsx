import { useContext } from 'react';

import { mobileMenuContext } from '../../helpers/mobileMenuProvider.jsx';
import { MenuTemplate } from '../../components/templates/Menu/MenuTemplate.jsx';
import { AboutTemplate } from '../../components/templates/About/AboutTemplate.jsx';
import { RateUsTemplate } from '../../components/templates/RateUs/RateUsTemplate.jsx';
import { HeroTemplate } from '../../components/templates/HeroTemplate/HeroTemplate.jsx';
import { ArrowUpTemplate } from '../../components/templates/ArrowUpTemplate/ArrowUpTemplate.jsx';
import { ReservationTemplate } from '../../components/templates/Reservation/ReservationTemplate.jsx';

function HomePage() {
  const { isOpen } = useContext(mobileMenuContext);
  return (
    <>
      <HeroTemplate />
      <AboutTemplate />
      <MenuTemplate />
      <RateUsTemplate />
      <ReservationTemplate />
      {!isOpen && <ArrowUpTemplate />}
    </>
  );
}

export { HomePage };
