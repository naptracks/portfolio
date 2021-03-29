import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Contact.module.css';
import Hoverboard from "../../components/UI/Hoverboard/Hoverboard";
import Form from "../../components/Contact/Form/Form";


export const Contact = props => {
    return (
        <Aux>
            <section key={props.key} >
                <Hoverboard/>
                <Form/>
            </section>
        </Aux>
    )
};


export const ContactTitle = props => (
    <section key={props.key} style={{backgroundColor: '#ff6b6b'}}>
        <h1>Contact</h1>
    </section>
)
