import React, {useState} from 'react';

const Songs = ({album}) => {
    // console.log(album)
    // const generateList = (album) => { return (album.map((e)=> <li>{e}</li>)) }
    const generateList = (album) => { return (album.map((e, i)=> <GenItem name={e} key={i}/>)) }

    const GenItem = (e, key) => {
        // console.log(name.name)
        const [counter, setCounter] = useState(0);
        const incrementCounter = () => setCounter(prevCount=>++prevCount) 
        const decrementCounter = () => setCounter(prevCount=>--prevCount) 

        return (
            <>
            <li>{e.name}</li>
            <button onClick={incrementCounter}>+</button>
            {counter}
            <button onClick={decrementCounter}>-</button>
            </>
        )
    }

    return (
        <>
            <ul>
                {generateList(album)}
            </ul>

        </>
    )
};

export default Songs;