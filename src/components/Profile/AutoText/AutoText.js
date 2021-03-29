import React, {useState, useEffect} from 'react';
import Aux from '../../../hoc/Aux';

const AutoText = props => {

    const {text, speed, styles} = props;

    const [state, setState] =useState({

        txt: ''
    })

    const [i, setI] = useState(1)



    const writeText = () => {

        const slicedText = text.slice(0, i);
        setI(i + 1)
        if(i > text.length) {
            setI(1)
        }
        setState({txt: slicedText})
    }

    useEffect(()=> {
        const interval = setInterval( () => writeText(), speed)

        return () => clearInterval(interval)
    },[writeText()])



    return (
        <Aux>
            <h1 style={styles}> {state.txt} </h1>
        </Aux>
    )
};

export default AutoText;