import React, { useEffect, useState } from 'react'
import ManagerType from '../../Components/Admin/ManagerType'
import { Breadcrumb, Button, Modal } from 'antd';
import { addType, deleteType, getTypeRooms, updateType } from '../../services/api';
import FormAddType from '../../Components/Admin/room_manager/FormAddType';

function ManagerTypePage({fetchTypeRooms}) {
  const [types, setTypes] = useState([])
  const [openAdd, setOpenAdd] = useState(false);

  const fetchTypes = async () => {
    const response = await getTypeRooms();
    setTypes(response);
  }

  const fetchAddType = async (name) => {
    await addType(name);
    fetchTypes();
    fetchTypeRooms();
  }

  const remove = async (id) => {
    await deleteType(id);
    fetchTypes();
    fetchTypeRooms();
  }

  const handleCancel = () => {
    setOpenAdd(false);
  };

  const handleUpdate = async (id, name) => {
    await updateType(id, name);
    fetchTypes();
    fetchTypeRooms();
  }

  useEffect(() => {
    fetchTypes();
  }, [])

  return (
    <div>
      <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item className='breadcrumbItem'>Admin</Breadcrumb.Item>
        <Breadcrumb.Item className='breadcrumbItem'>Manager Room Types</Breadcrumb.Item>
      </Breadcrumb>
      <div className="search-form-booking-main">
        <div>
          <Button className='btn-add-form-room-manager' type="primary" onClick={() => setOpenAdd(true)}>ADD</Button>
          <Modal
            title="Add type"
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
            <FormAddType close={handleCancel} handleAdd={fetchAddType} />
          </Modal>
        </div>
        <div className="search-form-booking-child">
          <ManagerType types={types} remove={remove} handleUpdate={handleUpdate} />
        </div>
      </div>
    </div>
  )
}

export default ManagerTypePage
