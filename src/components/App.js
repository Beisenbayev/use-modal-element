import React from 'react';
import Home from './Home';

import useModal from 'use-modal-element/build';

const App = (props) => {
  const [modal, openModal] = useModal({
    withBackground: true,
    withCloseButton: true,
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