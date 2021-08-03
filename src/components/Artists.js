import React from 'react';

const Artists = ({name, musicgenre, intro}) => {
    return (
        <>
        <h1>{name}</h1>
        <h2>Genre: {musicgenre}</h2>
        <p>{intro}</p>
        </>
    )
};

export default Artists;