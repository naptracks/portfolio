import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Portfolio.module.css'
import Cards from '../../components/Portfolio/Cards/Cards';
import Hoverboard from '../../components/UI/Hoverboard/Hoverboard';


export const Portfolio = props => {

    // constants
    const {key, panels, handleClick} = props;

    // render
    return (
        <Aux>
            <section key={key} className={classes.Portfolio}>
                <h1>Les Projets</h1>
                <div className={classes.Container}>
                    <Cards
                        panels={panels}
                        handleClick={handleClick}
                    />
                </div>

            </section>

        </Aux>
    )
};


export const PortfolioTitle = props => {

    const {panels} = props;

    const panelSel = panels.find(panel => panel.active === true);
    return (
            <section key={props.key} style={{backgroundColor: '#654062'}}>
                <h3>{panelSel.h3}</h3>
                <p>{panelSel.h3}</p>
            </section>
    )
}




