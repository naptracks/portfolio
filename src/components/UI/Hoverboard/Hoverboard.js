import React, {useState, useEffect} from 'react';
import Aux from '../../../hoc/Aux';
import classes from './Hoverboard.module.css';


const Hoverboard = props => {

    //constants
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

    // states
    const [state, setState] = useState({
        squares: [],
    })

    // effects
    useEffect(() => {

        setState({squares: makeSquares(900)})
    },[])

    // functions
    const makeSquares = (num) => {
        const square = {
            background: '#f4f4f4',
            boxShadow: '0 0 2px #f4f4f4'
        }
        const tab = []
        for(let i = 0; i < num; i++) {
            tab[i] = square;
        }
        return tab;
    }
    const setColor = (i) => {
        const color = getRandomColor();
        const tab = state.squares
        tab[i] =  {
            boxShadow: `0 0 2px ${color}, 0 0 10px ${color}`,
            background: color
        }
        setState({
            squares: tab
        })
    }
    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)]
    }
    const removeColor = (i) => {
       const tab = state.squares;
       tab[i] = {
           background: '#f4f4f4',
           boxShadow: '0 0 2px #f4f4f4'
       }
       setState({squares: tab})
    }

    // render Hoverboard
    return (
        <Aux>
            <section className={classes.Container}>
                {
                    state.squares.map((square, i) =>
                        <div key={i} onMouseEnter={() => setColor(i)} onMouseLeave={() => removeColor(i)}
                             className={classes.Square} style={{background: square.background, boxShadow: square.boxShadow}}>

                        </div>)
                }
            </section>
        </Aux>
    )
};

export default Hoverboard;