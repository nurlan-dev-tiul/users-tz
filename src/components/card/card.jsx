import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './style.scss'

export const Card = ({item, onClick}) => {
    return (
        <div className='card' onClick={() => onClick(item.name)}>
            <h4 className="card__title">{item.name}</h4>
            <div className='card__contact'>
                <div className="card__contact-item">
                    <FontAwesomeIcon className='card__icon' icon={faMobileScreenButton} />
                    <span className='card__contact-phone'>{item.phone}</span>
                </div>
                <div className="card__contact-item">
                    <FontAwesomeIcon className='card__icon' icon={faEnvelope} />
                    <span className='card__contact-mail'>{item.email}</span>
                </div>
            </div>
        </div>
    )
}
