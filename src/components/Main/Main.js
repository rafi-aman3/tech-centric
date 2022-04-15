import { Modal } from 'antd';
import React, { useState } from 'react';
import { AntennaBars1 } from 'tabler-icons-react';
import { data } from '../../data/data';
import './Main.css'
import ModalDetails from './ModalDetails';


function Main() {
    const [showModal, setShowModal] = useState(false);
    
  return (    
    <div class="wrapper">
        {
            data.map((item,index) => (
                <div key={index} class="card">
                    <img src={item.img} alt={item.title}/> 
                    <div class="info">
                        <h2>{item.title}</h2>
                        <button onClick={() => {setShowModal(true)} }>
                            <AntennaBars1
                                size={26}
                                strokeWidth={2.5}
                                color={'black'}
                            />
                        </button>   
                    </div>
                    <Modal
                            visible={showModal}
                            onOk={() => setShowModal(false)}
                            onCancel={() => setShowModal(false)}
                            centered
                            width={500}
                        >
                            <ModalDetails item={item} />
                    </Modal>
                </div>
            ))
        }
    </div>
  )
}

export default Main