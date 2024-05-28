import { useContext } from 'react';

import { mobileMenuContext } from '../../helpers/mobileMenuProvider';
import { MenuTemplate } from '../../components/templates/Menu/MenuTemplate';
import { AboutTemplate } from '../../components/templates/About/AboutTemplate';
import { RateUsTemplate } from '../../components/templates/RateUs/RateUsTemplate';
import { HeroTemplate } from '../../components/templates/HeroTemplate/HeroTemplate';
import { ArrowUpTemplate } from '../../components/templates/ArrowUpTemplate/ArrowUpTemplate';
import { ArrowUpTemplate } from '../../components/templates/ArrowUpTemplate/ArrowUpTemplate';
import { ReservationTemplate } from '../../components/templates/Reservation/ReservationTemplate';

function HomePage() {
  const { close } = useContext(mobileMenuContext);
  return (
    <>
      <HeroTemplate />
      <AboutTemplate />
      <MenuTemplate />
      <RateUsTemplate />
      <ReservationTemplate />
      {close && <ArrowUpTemplate />}
    </>
  );
}

export { HomePage };
