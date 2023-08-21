import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import './cssRoomManager.css';
import FormDetail from './FormEditRoom';
import { remove } from '../../../redux/actions/roomManagerAction';
import { useDispatch } from 'react-redux'

function RoomCard({ room }) {
    const { id, name, detail, img, description, price } = room
    const [openDetail, setOpenDetail] = useState(false);
    const dispatch = useDispatch()
    const Detail = () => {
        setOpenDetail(true);
    };

    const handleCancel = (e) => {
        setOpenDetail(false);
    };
    const handleRemove = () => {
        dispatch(remove(id))
    }
    return (
        <div className="row g-0 card-main-admin-manager-room">
            <div className="col-md-3 img-admin-manager-room">
                <img src={img} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-6 ">
                <div className="card-body">
                    <h5>{name}</h5>
                    <p>{detail}</p>
                    <ul style={{ listStyle: "disc" }}>{description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}</ul>
                    <p>{price}</p>
                </div>
            </div>
            <div className="col-md-2 ">
                <div className='btn-admin-room-manager'>
                    <Button className='btn-detail-admin-room-manager' type="primary" onClick={Detail}>Detail</Button>
                    <Modal
                        title="Detail"
                        open={openDetail}
                        onCancel={handleCancel}
                        okButtonProps={{
                            hidden: true
                        }}
                        cancelButtonProps={{
                            hidden: true
                        }}
                        width={800}
                    >
                        <FormDetail room={room}
                        />
                    </Modal>
                    <Button type="primary" danger onClick={handleRemove}>Delete</Button>
                </div>
            </div>
        </div>
    )
}
export default RoomCard