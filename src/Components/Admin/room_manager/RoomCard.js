import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import './cssRoomManager.css';
import FormDetail from './FormEditRoom';
import { remove } from '../../../redux/actions/roomManagerAction';
import { useDispatch } from 'react-redux';

function RoomCard({ room, handleRemove, type, handleUpdateRoom, handleCheckOut }) {
    const { id, name, details, img, description, price, status } = room
    const [openDetail, setOpenDetail] = useState(false);
    const dispatch = useDispatch()
    const Detail = () => {
        setOpenDetail(true);
    };

    const handleCancel = () => {
        setOpenDetail(false);
    };
    // const handleRemove = () => {
    //     dispatch(remove(id))
    // }

    return (
        <div className="row g-0 card-main-admin-manager-room">
            <div className="col-md-3 img-admin-manager-room">
                <img src={img} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-5 ">
                <div className="card-body">
                    <h5>{name}</h5>
                    <p>{details}</p>
                    <p>Status: {status}</p>
                    <h6>Price: {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(price)}</h6>
                </div>
            </div>
            <div className="col-md-3 ">
                <div className='btn-admin-room-manager'>
                    {status === 'occupied' && (
                        <Button className='btn-detail-admin-room-manager' type="primary" onClick={() => {handleCheckOut(room.id)}}>Check out</Button>
                    )}
                    <Button className='btn-detail-admin-room-manager' type="primary" onClick={Detail}>Edit</Button>
                    <Modal
                        title="Detail"
                        visible={openDetail}
                        onCancel={handleCancel}
                        okButtonProps={{
                            hidden: true
                        }}
                        cancelButtonProps={{
                            hidden: true
                        }}
                        width={800}
                    >
                        <FormDetail type={type} close={handleCancel} handleUpdateRoom={handleUpdateRoom} room={room} />
                    </Modal>
                    <Button type="primary" danger onClick={() => handleRemove(room.id)}>Delete</Button>
                </div>
            </div>
        </div>
    )
}
export default RoomCard