import React from 'react';
import s from './Home.module.css';

const Home = (props) => {
   return (
      <div>
         <h2 onClick={props.openModal}>Home</h2>
         <p className={s.text}>content text content text content text content text content text content text content text content text content text content text content text</p>
         <p className={s.text}>content text content text content text content text content text content text content text content text content text content text content text</p>
         <p className={s.text}>content text content text content text content text content text content text content text content text content text content text content text</p>
         <p className={s.text}>content text content text content text content text content text content text content text content text content text content text content text</p>
         <p className={s.text}>content text content text content text content text content text content text content text content text content text content text content text</p>
         <p className={s.text}>content text content text content text content text content text content text content text content text content text content text content text</p>
         <p className={s.text}>content text content text content text content text content text content text content text content text content text content text content text</p>
         <p className={s.text}>content text content text content text content text content text content text content text content text content text content text content text</p>
         <p className={s.text}>content text content text content text content text content text content text content text content text content text content text content text</p>
         <p className={s.text}>content text content text content text content text content text content text content text content text content text content text content text</p>
      </div>
   );
}


export default Home;