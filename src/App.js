import React from 'react';
import Home from './components/Home/Home';

import useModal from './components/Modal/Modal';

const App = (props) => {
  const [modal, openModal] = useModal({
    withBackground: true,
    withCloseButton: false,
    closableBackground: true,
    scrollableBackground: false,
  });

  return (
    <>
      <Home openModal={openModal} />
      {modal}
    </>
  );
}


export default App;