import { Outlet } from 'react-router-dom';

import { About } from '../About/About.jsx';
// import { Header } from '../Header/Header.jsx';
// import { Footer } from '../Footer/Footer.jsx';
// import { Container } from '../Container/Container.jsx';

function SharedLayout() {
  return (
    <>
      {/*  <Container>
     <Header /> */}
      <About />
      <Outlet />
      {/* <Footer />
    </Container> */}
    </>
  );
}

export { SharedLayout };
