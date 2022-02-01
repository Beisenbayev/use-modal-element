import React from 'react';
import Home from './Home';

import useModal from 'use-modal-element';

const App = (props) => {
  const [Modal, openModal] = useModal({
    withBackground: {
      // closable: true,
      // scrollable: true
    },
    withCloseButton: {
      type: 'text',
      text: '',
    },
    fullyShieldedMobile: false
  });

  return (
    <>
      <Home openModal={openModal} />
      <Modal
        title='Обратный звонок'
        subtitle='Перезвони в ближайшее время.'>
        <p>awawdaw adwada awdawdaw awdadwawd</p>
      </Modal>
    </>
  );
}


export default App;