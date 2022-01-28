import React from 'react';
import Home from './Home';

import useModal from 'use-modal-element'

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