import React from 'react';
import Artists from './components/Artists';
import Songs from './components/Songs';

const App = () => {
    return (
        <>
            <Artists name="Ariana Grande" musicgenre="pop" intro="hfewjr jkebiwr "/>
            <Songs album={["into you", "seven rings"]}/>
            <Artists name="Rafika" musicgenre="pop" intro="Rafika is a good artist "/>
            <Songs album={["talking crazy", "hello world", "tada"]}/>
        </>
    )
};

export default App;