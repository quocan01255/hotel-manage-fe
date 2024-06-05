
import React, { useState } from 'react';

import { Button, Space, Table, Modal } from 'antd';
import FormEditType from './room_manager/FormEditType';

const ManagerType = (props) => {
  const { types, remove, handleUpdate } = props;
  const [openDetail, setOpenDetail] = useState(false);
  const [currentType, setCurrentType] = useState({});

  const handleCancel = () => {
    setOpenDetail(false);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '80%',
    },
    {
      title: 'Action',
      key: 'action',
      render: (type) => (
        <Space size="middle">
          <Space className="site-button-ghost-wrapper" wrap>
            <Button type="primary" onClick={() => {
              setOpenDetail(true);
              setCurrentType(type);
            }}>Edit</Button>
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
              <FormEditType type={currentType} close={handleCancel} handleUpdate={handleUpdate} />
            </Modal>
            <Button type="primary" danger onClick={() => remove(type.id)} ><i class="fa-solid fa-trash"></i></Button>
          </Space>
        </Space >
      ),
    },

  ];
  return <Table columns={columns} dataSource={types} />;
};
export default ManagerType;