import React, {useState, useContext} from 'react';
import Aux from './hoc/Aux';
import classes from './App.module.css'
import Layout from './hoc/Layout/Layout';
import {Profile, ProfileTitle} from "./containers/Profile/Profile";
import {Portfolio, PortfolioTitle} from "./containers/Portfolio/Portfolio";
import {Contact, ContactTitle} from './containers/Contact/Contact';
import site1 from './assets/site1.png';
import site2 from './assets/site2.png';
import site3 from './assets/site3.png';
import site4 from './assets/site4.png';

function App() {


    // constants
    const getHeight = () => window.innerHeight;
    const slides = [Profile, Portfolio, Contact];
    const titles = [ProfileTitle, PortfolioTitle, ContactTitle];
    const panels = [
        {
            active: true,
            url: site1,
            h3: 'Le Comptoir des Roses'
        },
        {
            active: false,
            url: site2,
            h3: 'Card 2'
        },
        {
            active: false,
            url: site3,
            h3: 'Card 3'
        },
        {
            active: false,
            url: site4,
            h3: 'Card 4'
        },
        {
            active: false,
            url: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            h3: 'Card 5'
        },
    ];

    // states
    const [state, setState] = useState({
        activeIndex: 0,
        panels: panels,
    });
    const [styles, setStyles] = useState({
        transformRight: 0,
        transformLeft: 0,
        top: -(slides.length - 1) * 100
    })

    // functions
    const changeSlide = (direction) => {
        let index = state.activeIndex;
        if (direction === 'up') {
            index++;
            if (index > slides.length - 1) {
                index = 0;
            }
        } else if (direction === 'down') {
            index--;
            if (index < 0) {
                index = slides.length - 1
            }
        }
        setState({
            ...state,
            activeIndex: index,
        })
        let transformRight = `translateY(-${index * getHeight()}px)`
        let transformLeft = `translateY(${index * getHeight()}px)`
        setStyles({
            transformRight,
            transformLeft,
        })
    }
    const handlePanelClick = (key) => {
        const panels = state.panels;
        panels.forEach(panel => panel.active = false);
        panels[key].active = true;
        setState({...state, panels})
    }

    // render App
    return (
        <Aux>
            <Layout>
                <div className={classes.SliderContainer}>
                    <div className={classes.LeftSlide}
                         style={{transform: styles.transformLeft, top: `${styles.top}vh`}}>

                        {titles.reverse().map((Component, key) => {
                                if (Component === PortfolioTitle) {
                                    return <Component
                                        key={key}
                                        panels={state.panels}/>
                                }
                                return <Component key={key}/>
                            }
                        )}

                    </div>

                    <div className={classes.RightSlide}
                         style={{transform: styles.transformRight}}>
                        {slides.map((Component, key) => {
                                if (Component === Portfolio) {
                                    return <Component
                                        key={key}
                                        handleClick={handlePanelClick}
                                        panels={state.panels}
                                    />
                                }
                                return <Component key={key}/>
                            }
                        )}
                    </div>
                    <div className={classes.ActionButtons}>
                        <button className={classes.DownButton}
                                onClick={() => changeSlide('down')}>
                            <i className="fas fa-arrow-down"></i>
                        </button>
                        <button className={classes.UpButton}
                                onClick={() => changeSlide('up')}>
                            <i className="fas fa-arrow-up"></i>
                        </button>
                    </div>
                </div>
            </Layout>
        </Aux>
    );
}

export default App;
