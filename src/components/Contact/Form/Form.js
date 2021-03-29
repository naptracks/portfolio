import React from 'react'
import classes from './Form.module.css';
import Aux from '../../../hoc/Aux';


const Form = props => {

    return (
        <Aux>
            <div className={classes.Container}>
               <h1>Contact</h1>
                <input placeholder='Nom'/>

                <input placeholder='E-mail'/>

                <input placeholder='Sujet'/>

                <textarea row={5} placeholder='Votre message'/>
            </div>

        </Aux>
    )
};

export default Form;