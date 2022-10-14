import React, {useState} from 'react';
import axios from 'axios';
import { Card } from './card';
import { Modal } from '../modal';
import { Detail } from '../detail';
import './style.scss';
import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';

export const ListCard = ({cards}) => {

    const [visableModal, setVisableModal] = useState(false); //! Состояние для popup
    const [detail, setDetail] = useState(); //! Здесь лежат детальные данные

    //! Детальные данные - по имени
    const getDetailUser = (name) => {
        setVisableModal(true);
        try {
            const getUser = async() => {
                const {data} = await axios.get(`http://127.0.0.1:3000?term=${name}`)
                setDetail(data);
            }
            getUser();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='card-list'>
                {cards <= 0 ? (
                    <h3>Ничего нет</h3>
                    ) : (
                        cards?.map((item, index) => (
                            <Card key={index} item={item} onClick={getDetailUser} />
                        )
                    ))
                }
            </div>
            <Modal active={visableModal} setActive={setVisableModal}>
                <Detail detail={detail} closeModal={setVisableModal} />
            </Modal>
        </>
    )
}
