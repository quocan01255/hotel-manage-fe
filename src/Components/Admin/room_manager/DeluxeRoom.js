import React, { useState, useEffect } from 'react';
import { Button, Breadcrumb, Divider, Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import './cssRoomManager.css';
import FormAddRoom from './FormAddRoom';
import RoomCard from '../room_manager/RoomCard';
import { ToastContainer, toast } from 'react-toastify';
import { rsMessage, rsIsAddSuccess, rsIsUpdSuccess, rsIsDeleteSuccess } from '../../../redux/actions/roomManagerAction';

function Deluxe() {
  const [openAdd, setOpenAdd] = useState(false);
  const [rooms, setRooms] = useState([]);
  const isAddSuccess = useSelector(state => state.roomManagerReducer.isAddSuccess);
  const isUpdSuccess = useSelector(state => state.roomManagerReducer.isUpdSuccess);
  const isDeleteSuccess = useSelector(state => state.roomManagerReducer.isDeleteSuccess);
  const dispatch = useDispatch()
  const message = useSelector(state => state.roomManagerReducer.message);

  const ADD = () => {
    setOpenAdd(true);
  };

  const handleCancel = (e) => {
    setOpenAdd(false);

  };

  const setData = () => {
    fetch('http://localhost:3001/rooms')
      .then((response) => response.json())
      .then((data) => {
        const newRooms = data.filter(room => room.type === "Deluxe")
        setRooms(newRooms)
      })
      .catch((error) => {
      });
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
    setData()
  }, [])

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
      <Divider orientation='left' className='divider-admin-room-manager'>Deluxe</Divider>
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
            <FormAddRoom close={handleCancel} type="Deluxe" />
          </Modal>
        </div>
        {rooms.map(
          (room) => <RoomCard key={room.id} room={room}
          />)}
      </div>
    </div>
  );
}
export default Deluxe;