import React, { useState } from 'react';
import { Button, Breadcrumb, Divider, Modal } from 'antd';
import './cssRoomManager.css';
import FormAddRoom from './FormAddRoom';
import FormDetail from './FormEditRoom';

function DeluxePlus() {
  const [openAdd, setOpenAdd] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);

  const ADD = () => {
    setOpenAdd(true);
  };
  const Detail = () => {
    setOpenDetail(true);
  };
  const handleCancel = (e) => {
    setOpenDetail(false);
    setOpenAdd(false);
  };
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
        <div className="row g-0 card-main-admin-manager-room">
          <div className="col-md-3 img-admin-manager-room">
            <img src="https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/781688/781688/SUPERIOR_TWIN_02.jpg" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-6 ">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div>
                Status
              </div>
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
                <FormDetail />
              </Modal>
              <Button type="primary" danger>Delete</Button>
            </div>
          </div>
        </div>
        <div className="row g-0 card-main-admin-manager-room">
          <div className="col-md-3 img-admin-manager-room">
            <img src="https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/781688/781688/SUPERIOR_TWIN_02.jpg" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-6 ">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div>
                Status
              </div>
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
                <FormDetail />
              </Modal>
              <Button type="primary" danger>Delete</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DeluxePlus;