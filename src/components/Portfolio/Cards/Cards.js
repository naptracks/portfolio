import React from 'react';
import Aux from '../../../hoc/Aux';
import classes from './Cards.module.css';


const Cards = props => {

    // constants
    const {panels, handleClick} = props;


    // render
    return (
        <Aux>
            {
                panels.map((panel, key) => {
                        if (panel.active === true) {
                            return <div key={key}
                                        className={[classes.Panel, classes.Active].join(' ')}
                                        style={{backgroundImage: `url(${panel.url})`}}
                                        onClick={() => handleClick(key)}
                            >
                                <h3>{panel.h3}</h3>
                            </div>
                        }
                        return <div key={key}
                                    className={classes.Panel}
                                    style={{backgroundImage: `url(${panel.url})`}}
                                    onClick={() => handleClick(key)}
                        >
                            <h3>{panel.h3}</h3>
                        </div>
                    }
                )
            }
        </Aux>
    )
};

export default Cards;

