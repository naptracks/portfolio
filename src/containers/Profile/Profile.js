import React from "react";
import Aux from '../../hoc/Aux';
import classes from './Profile.module.css'
import mypic from '../../assets/mypic.jpg';
import Clock from "../../components/Profile/Clock/Clock";
import AutoText from "../../components/Profile/AutoText/AutoText";

export const Profile = props => {


    return (
        <Aux>
            <section key={props.key} className={classes.Profile}>
                    {/*<AutoText styles={{textAlign: 'center'}} speed={1000} text="Hey I'm Cesar, Web Developer Front-End. React Expert."/>*/}
                <div className={classes.Container}>
                    <Clock/>

                </div>


            </section>
        </Aux>
    )
};

export const ProfileTitle = props => (
    <section key={props.key} className={classes.Title}>
        <h1>Cesar Martel</h1>
        <div className={classes.Avatar}></div>
        <h2>Développeur JavaScript / Python</h2>
        <p>REACT.js / REACT Native</p>
        <br/>
        <p>
            Software engineering gives us the freedom to design the world we want to see. Working collaboratively with
            creative thinkers on innovative solutions that make the world better for people is how I thrive.
        </p>
        <p> Having worked in the exciting live music environment, I developed a deep understanding of how to manage a
            tight deadline as well as high stress environment to approach to product creation. </p>

        <p>As an Empathic Idealist, I'm now moving into the tech industry to have a greater impact on people's life and
            to be at forefront of exciting changes in our society.  </p>


    </section>
)
