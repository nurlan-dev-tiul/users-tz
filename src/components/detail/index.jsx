import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { truncateString } from '../../utils/withString';
import './style.scss';

export const Detail = ({detail, closeModal}) => {
    return (
        <div className='detail'>
            {detail?.map((det, index) => (
                <div key={index}>
                    <div className='close' onClick={() => closeModal(false)}>
                        <FontAwesomeIcon className='close__icon' icon={faXmark} />
                    </div>
                    <h2>{det?.name}</h2>
                    <div className='detail__content'>
                        <span className='detail__content-title'>Телефон:</span>
                        <span className='detail__content-desc underline'>{det?.phone}</span>
                    </div>
                    <div className='detail__content'>
                        <span className='detail__content-title'>Почта:</span>
                        <span className='detail__content-desc underline'>{det?.email}</span>
                    </div>
                    <div className='detail__content'>
                        <span className='detail__content-title'>Дата приема:</span>
                        <span className='detail__content-desc'>{det?.hire_date}</span>
                    </div>
                    <div className='detail__content'>
                        <span className='detail__content-title'>Должность:</span>
                        <span className='detail__content-desc'>{truncateString(det?.position_name, 45, '. . .')}</span>
                    </div>
                    <div className='detail__content'>
                        <span className='detail__content-title'>Подразделение:</span>
                        <span className='detail__content-desc'>{truncateString(det?.department, 45, '. . .')}</span>
                    </div>
                    <div className='detail__footer'>
                        <h4 className='detail__footer-title'>Дополнительная информация</h4>
                        <p className='detail__footer-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi sed natus illum aliquam 
                            sit impedit eveniet excepturi, 
                            accusamus blanditiis, ipsa quia recusandae animi reprehenderit molestiae provident atque at ut sunt?
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
