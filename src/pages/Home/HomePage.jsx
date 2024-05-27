import { smoothScrollToTop } from '../../helpers/smoothScroll';
import { MenuTemplate } from '../../components/templates/Menu/MenuTemplate';
import { AboutTemplate } from '../../components/templates/About/AboutTemplate';
import { RateUsTemplate } from '../../components/templates/RateUs/RateUsTemplate';
import { HeroTemplate } from '../../components/templates/HeroTemplate/HeroTemplate';
import { ArrowUpTemplate } from '../../components/templates/ArrowUpTemplate/ArrowUpTemplate';
import { ReservationTemplate } from '../../components/templates/Reservation/ReservationTemplate';

function HomePage() {
  smoothScrollToTop();
  return (
    <>
      <HeroTemplate />
      <AboutTemplate />
      <MenuTemplate />
      <RateUsTemplate />
      <ReservationTemplate />
      <ArrowUpTemplate />
    </>
  );
}

export { HomePage };
