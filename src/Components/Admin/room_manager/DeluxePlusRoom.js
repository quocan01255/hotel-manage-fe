import React, { useState, useEffect } from 'react';
import { Button, Breadcrumb, Divider, Modal } from 'antd';
import './cssRoomManager.css';
import FormAddRoom from './FormAddRoom';
import RoomCard from '../room_manager/RoomCard';

function DeluxePlus() {
  const [openAdd, setOpenAdd] = useState(false);
  const [rooms, setRooms] = useState([]);

  const ADD = () => {
    setOpenAdd(true);
  };

  const handleCancel = (e) => {
    setOpenAdd(false);
  };

  useEffect(() => {
    fetch('http://localhost:3001/rooms')
      .then((response) => response.json())
      .then((data) => {

        const newRooms = data.filter(room => room.type === "Deluxe Plus")
        setRooms(newRooms)
      })
      .catch((error) => {

      });
  },)
  return (
    <div>
      <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item className='breadcrumbItem'>Admin</Breadcrumb.Item>
        <Breadcrumb.Item className='breadcrumbItem'>Manager Room</Breadcrumb.Item>
        <Breadcrumb.Item className='breadcrumbItem'>Deluxe Plus</Breadcrumb.Item>
      </Breadcrumb>
      <Divider orientation='left' className='divider-admin-room-manager'>Deluxe Plus</Divider>
      <div className="card mb-3">
        <div>
          <Button className='btn-add-form-room-manager' type="primary" onClick={ADD}>ADD</Button>
          <Modal
            title="Add room"
            open={openAdd}
            onCancel={handleCancel}
            okButtonProps={{
              hidden: true
            }}
            cancelButtonProps={{
              hidden: true
            }}
            width={800}
          >
            <FormAddRoom />
          </Modal>
        </div>
        {rooms.map(
          (room) => <RoomCard room={room}
          />)}
      </div>
    </div>
  );
}
export default DeluxePlus;