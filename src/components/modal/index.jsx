import React from 'react';
import './style.scss';

export const Modal = ({children, active, setActive}) => {
    return (
        <div className={`modal ${active ? 'active' : ''}`} onClick={() => setActive(false)}>
            <div className={`modal_content ${active ? 'content_active' : ''}`} onClick={e => e.stopPropagation()}>
                <div className="modal_body">
                    {children}
                </div>
            </div>
        </div>
    )
}
