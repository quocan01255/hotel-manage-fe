import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Breadcrumb, Divider, Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import './cssRoomManager.css';
import FormAddRoom from './FormAddRoom';
import RoomCard from '../room_manager/RoomCard';
import { ToastContainer, toast } from 'react-toastify';
import { rsMessage, rsIsAddSuccess, rsIsUpdSuccess, rsIsDeleteSuccess } from '../../../redux/actions/roomManagerAction';
import { getRoomByType, getTypeById, getTypeRooms, addRoom, removeRoom, updateRoom, checkOut } from '../../../services/api';

function RoomType() {
  const [openAdd, setOpenAdd] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [typeName, setTypeName] = useState([]);
  const isAddSuccess = useSelector(state => state.roomManagerReducer.isAddSuccess);
  const isUpdSuccess = useSelector(state => state.roomManagerReducer.isUpdSuccess);
  const isDeleteSuccess = useSelector(state => state.roomManagerReducer.isDeleteSuccess);
  const dispatch = useDispatch()
  const message = useSelector(state => state.roomManagerReducer.message);
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
    if (message) {
      toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(rsMessage())
    }
  }, [message]);

  useEffect(() => {
    setData();
  }, [typeId])

  const fetchAddRoom = async (data) => {
    await addRoom(data.name, data.details, data.image, data.price, data.description, typeId);
    setData();
  }

  const handleRemove = async(id) => {
    await removeRoom(id);
    setData();
  }

  const handleUpdateRoom = async(id, data) => {
    await updateRoom(id, data.name, data.details, data.img, data.price, data.description, typeId);
    setData();
  }

  const handleCheckOut = async(id) => {
    await checkOut(id);
    setData();
  }

  useEffect(() => {
    if (isAddSuccess) {
      setData()
      dispatch(rsIsAddSuccess())
    }
    else if (isUpdSuccess) {
      setData()
      dispatch(rsIsUpdSuccess())
    }
    else if (isDeleteSuccess) {
      setData()
      dispatch(rsIsDeleteSuccess())
    }
  }, [isAddSuccess, isUpdSuccess, isDeleteSuccess])

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