import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Breadcrumb, Divider, Modal } from 'antd';
import './cssRoomManager.css';
import FormAddRoom from './FormAddRoom';
import RoomCard from '../room_manager/RoomCard';
import { ToastContainer, toast } from 'react-toastify';
import { getRoomByType, getTypeById, getTypeRooms, addRoom, removeRoom, updateRoom, checkOut } from '../../../services/api';

function RoomType() {
  const [openAdd, setOpenAdd] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [typeName, setTypeName] = useState([]);
  const { typeId } = useParams();

  const add = () => {
    setOpenAdd(true);
  };

  const handleCancel = (e) => {
    setOpenAdd(false);

  };

  const setData = async () => {
    const data = await getRoomByType(typeId)
    const typeName = await getTypeById(typeId);
    setTypeName(typeName[0].name)
    setRooms(data)
  }

  useEffect(() => {
    setData();
  }, [typeId])

  const fetchAddRoom = async (data) => {
    data.append('type_id', typeId)
    await addRoom(data);
    setData();
  }

  const handleRemove = async(id) => {
    await removeRoom(id);
    setData();
  }

  const handleUpdateRoom = async(id, data) => {
    data.append('type_id', typeId)
    await updateRoom(id, data);
    setData();
  }

  const handleCheckOut = async(id) => {
    await checkOut(id);
    setData();
  }

  return (
    <div>
      <ToastContainer />
      <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item className='breadcrumbItem'>Admin</Breadcrumb.Item>
        <Breadcrumb.Item className='breadcrumbItem'>Manager Room</Breadcrumb.Item>
        <Breadcrumb.Item className='breadcrumbItem'>Deluxe</Breadcrumb.Item>
      </Breadcrumb>
      <Divider orientation='left' className='divider-admin-room-manager'>RoomType</Divider>
      <div className="card mb-3">
        <div>
          <Button className='btn-add-form-room-manager' type="primary" onClick={add}>ADD</Button>
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
            <FormAddRoom close={handleCancel} type={typeName} handleAdd={fetchAddRoom} />
          </Modal>
        </div>
        {rooms.map(
          (room) => <RoomCard key={room.id} type={typeName} room={room} handleRemove={handleRemove} handleUpdateRoom={handleUpdateRoom} handleCheckOut={handleCheckOut}/>)}
      </div>
    </div>
  );
}
export default RoomType;