import { MenuTemplate } from '../../components/templates/Menu/MenuTemplate';
import { AboutTemplate } from '../../components/templates/About/AboutTemplate';
import { RateUsTemplate } from '../../components/templates/RateUs/RateUsTemplate';

function HomePage() {
  return (
    <>
      {/* <HeroTemplate/> */}
      <AboutTemplate />
      <MenuTemplate />
      {/* <ReservationTemplate/> */}
      <RateUsTemplate />
    </>
  );
}

export { HomePage };
