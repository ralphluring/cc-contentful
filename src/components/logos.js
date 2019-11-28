import React from 'react'
import logoStyles from './logos.module.scss'
import Snakes from '../components/snakes'
import Textlogo from '../components/textlogo'

const Logos = () => {
    return (
        <div className={logoStyles.container}>
            <Snakes />
            <Textlogo/>
            
        </div>
    )
}

export default Logos;