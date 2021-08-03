import React, { Component } from 'react';
import { Artists, Songs } from './components';

const App = () => {
  return (
    <>
      <Artists name="Ariana Grande" musicgenre="pop" intro="hfewjr jkebiwr " />
      <Songs album={['into you', 'seven rings']} />
      <Artists name="Rafika" musicgenre="pop" intro="Rafika is a good artist " />
      <Songs album={['talking crazy', 'hello world', 'tada']} />
    </>
  );
};

export default App;
