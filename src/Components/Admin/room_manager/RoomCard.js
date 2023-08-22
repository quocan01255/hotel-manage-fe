import { Button, Modal } from 'antd';
import React, { useState, useCallback, useEffect } from 'react';
import './cssRoomManager.css';
import FormDetail from './FormEditRoom';
import { remove } from '../../../redux/actions/roomManagerAction';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

function RoomCard({ room }) {
    const { id, name, detail, img, description, price } = room
    const [openDetail, setOpenDetail] = useState(false);
    const dispatch = useDispatch()
    const Detail = () => {
        setOpenDetail(true);
    };

    const handleCancel = () => {
        setOpenDetail(false);
    };
    const handleRemove = () => {
        dispatch(remove(id))
    }
    const currencyFormat = useCallback((num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }, []);
    // const message = useSelector(state => state.roomManagerReducer.message)
    // useEffect(() => {
    //     if (message) {
    //         toast.success(message, {
    //             position: toast.POSITION.TOP_CENTER,
    //             autoClose: 3000,
    //             hideProgressBar: true,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //         });
    //     }
    // }, []);
    return (
        <div className="row g-0 card-main-admin-manager-room">
            <ToastContainer />
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
                    <h6>Price: {currencyFormat(String(price))}đ</h6>
                </div>
            </div>
            <div className="col-md-2 ">
                <div className='btn-admin-room-manager'>
                    <Button className='btn-detail-admin-room-manager' type="primary" onClick={Detail}>Detail</Button>
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
                        <FormDetail room={room} />
                    </Modal>
                    <Button type="primary" danger onClick={handleRemove}>Delete</Button>
                </div>
            </div>
        </div>
    )
}
export default RoomCard