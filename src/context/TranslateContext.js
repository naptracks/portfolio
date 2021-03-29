import React, {createContext, useReducer} from 'react';
import Aux from '../hoc/Aux';
import dataENG from "../data/dataENG";
import dataFR from "../data/dataFR";

export const TranslateContext = createContext();

const TranslateReducer = (lang, action) => {
    switch (action.type) {
        case 'fr':
            return lang = dataFR;
        case 'eng':
            return lang = dataENG;
        default:
            return lang = dataFR;
    }
}

export const TranslateProvider = props => {
    const [lang, dispatchLang] = useReducer(TranslateReducer, 'fr')


    return (
        <Aux>
            <TranslateContext.Provider value={{lang, dispatchLang}}>
                {props.children}
            </TranslateContext.Provider>
        </Aux>

    )
};

