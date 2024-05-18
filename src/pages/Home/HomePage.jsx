import { MenuTemplate } from '../../components/templates/Menu/MenuTemplate';
import { AboutTemplate } from '../../components/templates/About/AboutTemplate';
import { RateUsTemplate } from '../../components/templates/RateUs/RateUsTemplate';
import { ReservationTemplate } from '../../components/templates/Reservation/ReservationTemplate';

function HomePage() {
  return (
    <>
      {/* <HeroTemplate/> */}
      <AboutTemplate />
      <MenuTemplate />
      <RateUsTemplate />
      <ReservationTemplate />
    </>
  );
}

export { HomePage };
