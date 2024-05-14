import { Outlet } from 'react-router-dom';

// import { Header } from '../Header/Header.jsx';
// import { Footer } from '../Footer/Footer.jsx';
import { Container } from '../Container/Container.jsx';

function SharedLayout() {
  return (
    <>
      <Container>
        {/* <Header /> */}
        <Outlet />
        {/* <Footer /> */}
      </Container>
    </>
  );
}

export { SharedLayout };
