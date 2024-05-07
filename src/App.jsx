import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from './components/templates/SharedLayout/SharedLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <Route index element={<Home />} /> */}
      </Route>
      {/* <Route path="*" element={<Page404 />} /> */}
    </Routes>
  );
}

export { App };
