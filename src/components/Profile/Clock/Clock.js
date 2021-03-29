import React, {useState, useEffect} from 'react';
import Aux from '../../../hoc/Aux';
import classes from './Clock.module.css';


const Clock = () => {

    // constants
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const time = new Date;

    // states
    const [styles, setStyles] = useState({
        transformHours: '',
        transformMinutes: '',
        transformSeconds: ''
    })
    const [state, setState] = useState({
        time: '',
        date: ''
    })

    // effects
    useEffect(() => {
        setTime()
    })

    // functions
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    const setTime = () => {
        const time = new Date;
        const month = time.getMonth()
        const day = time.getDay()
        const date = time.getDate()
        const hours = time.getHours()
        const hoursForClock = hours % 12
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const ampm = hours >= 12 ? 'PM' : 'AM'

        setStyles({
            transformHours: `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`,
            transformMinutes:  `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`,
            transformSeconds: `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`
        });

        setState({
            time: `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`,
            date: `${days[day]}, ${months[month]} `
        })
    }

    return (
        <Aux>

            <div className={classes.ClockContainer}>
                <div className={classes.Clock}>
                    <div className={[classes.Needle, classes.Hour].join(' ')}
                        style={{transform: styles.transformHours}}
                    >

                    </div>
                    <div className={[classes.Needle, classes.Minute].join(' ')}
                        style={{transform: styles.transformMinutes}}
                    >

                    </div>
                    <div className={[classes.Needle, classes.Second].join(' ')}
                         style={{transform: styles.transformSeconds}}

                    >

                    </div>
                    <div className={classes.CenterPoint}></div>
                </div>

                <div className={classes.Time}>{state.time}</div>
                {/*<div className={classes.Date}><span className={classes.Circle}>${state.date}</span></div>*/}
            </div>
        </Aux>
    )
};

export default Clock;