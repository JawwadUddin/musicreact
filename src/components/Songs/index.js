import React, {useState} from 'react';

const Songs = ({album}) => {
    // console.log(album)
    // const generateList = (album) => { return (album.map((e)=> <li>{e}</li>)) }
    const generateList = (album) => { return (album.map((e, i)=> <GenItem name={e} key={i}/>)) }

    const GenItem = (e, key) => {
        // console.log(name.name)
        const [decision, setDecision] = useState(true);
        const incrementCounter = () => setCounter(prevCount=>++prevCount) 
        const decrementCounter = () => setCounter(prevCount=>--prevCount)
        
        const changeDecision = () => {
            setDecision(prevDecision => !prevDecision)
        }
        return (
            <>
            <li style={{background: decision? 'none': 'green'}}>{e.name}</li>
            <button onClick={changeDecision}>{decision? 'LIKE': 'UNLIKE'}</button>
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