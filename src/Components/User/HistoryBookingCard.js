import { SearchOutlined } from '@ant-design/icons';
import React, { useEffect, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table,Modal } from 'antd';
import { MailOutlined,PhoneOutlined,UserOutlined} from "@ant-design/icons";
import RoomItem from "./room_item/RoomItem";

const ListBookCard = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const [data,setData] = useState([]);

  const [open, setOpen] = useState(false);
 
  const Detail = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    setOpen(false);
  };
  const handleCancel = (e) => {
    setOpen(false);
  };
  
  useEffect(() => {
    fetch('http://localhost:3000/bookings')
      .then(res => res.json())
      .then(booking => {
       
        setData(booking)
      // data.map((item)=>{
      //     Object.assign(item,{key:item.id})
      //   })
        
      // console.log(booking);
       console.log(booking);
      })
  }, []);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: 'Customer information',
      dataIndex: 'name',     
      key: 'name',
      width: '20%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Room',
      dataIndex: 'room',
      key: 'room',
      width: '20%',
      ...getColumnSearchProps('room'),
    },
    // {
    //   title: 'ID Room',
    //   dataIndex: 'age',
    //   key: 'age',
    //   width: '10%',
    //   ...getColumnSearchProps('age'),
    // },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      width: '10%',
      ...getColumnSearchProps('time'),
      sorter: (a, b) => a.time.length - b.time.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      width: '10%',

    },
    {
      title: 'Giá Room',
      //   render: (record) => {
      //     return (
      //       <>
      //        {new Intl.NumberFormat("vi-VN", {
      //     style: "currency",
      //     currency: "VND",
      //       }).format(record.price)}
      //       </>
      //     );
      //   }
    },

    {
      title: 'Action',
      key: 'action',
      render: (_,) => (
        <Space size="middle">
          <Space className="site-button-ghost-wrapper" wrap> 
          <Button className='btn-add-mr' type="primary" onClick={Detail}>Detail</Button>
          <Modal
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            okButtonProps={{
              hidden: true
            }}
            cancelButtonProps={{
              hidden: true
            }}
            width={1200}
            opacity= {0.5}
          >
            <RoomItem />
          </Modal>
        </Space>
            </Space >
        ),
    },
];
return <Table columns={columns} dataSource={data} />;
};
export default ListBookCard;