import React, {useState, useContext} from 'react';
import Aux from '../Aux';
import {TranslateProvider} from "../../context/TranslateContext";
import classes from './Layout.module.css';

const Layout = props => {

console.log(classes)
    return (
        <Aux>
            <TranslateProvider>
                <main className={classes.Content}>
                    {props.children}
                </main>
            </TranslateProvider>
        </Aux>
    )
};

export default Layout;