import { SearchOutlined } from '@ant-design/icons';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table } from 'antd';

const data = [
  {
    key: '1',
    name: 'Thắng',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room: "Room 1",
    quantity: 3,
    time: '2n/1d',
  },
  {
    key: '2',
    name: 'Thu',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room:"Room 2",
    quantity: 4,
    time: '1n/2d',
  },
  {
    key: '3',
    name: 'Thiện',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room:"Room 3",
    quantity: 5,
   time: '1n/1d',
  },
  {
    key: '4',
    name: 'Việt ',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room:"Room 4",
    quantity: 8,
    time: '3n/2d',
  },
  {
    key: '5',
    name: 'An',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room:"Room 6",
    quantity: 8,
    time: '3n/2d',
  },
  {
    key: '1',
    name: 'Thắng',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room: "Room 1",
    quantity: 3,
    time: '2n/1d',
  },
  {
    key: '2',
    name: 'Thu',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room:"Room 2",
    quantity: 4,
    time: '1n/2d',
  },
  {
    key: '3',
    name: 'Thiện',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room:"Room 3",
    quantity: 5,
   time: '1n/1d',
  },
  {
    key: '4',
    name: 'Việt ',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room:"Room 4",
    quantity: 8,
    time: '3n/2d',
  },
  {
    key: '5',
    name: 'An',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room:"Room 6",
    quantity: 8,
    time: '3n/2d',
  },
  {
    key: '1',
    name: 'Thắng',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room: "Room 1",
    quantity: 3,
    time: '2n/1d',
  },
  {
    key: '2',
    name: 'Thu',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room:"Room 2",
    quantity: 4,
    time: '1n/2d',
  },
  {
    key: '3',
    name: 'Thiện',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room:"Room 3",
    quantity: 5,
   time: '1n/1d',
  },
  {
    key: '4',
    name: 'Việt ',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room:"Room 4",
    quantity: 8,
    time: '3n/2d',
  },
  {
    key: '5',
    name: 'An',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room:"Room 6",
    quantity: 8,
    time: '3n/2d',
  },
  {
    key: '1',
    name: 'Thắng',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room: "Room 1",
    quantity: 3,
    time: '2n/1d',
  },
  {
    key: '2',
    name: 'Thu',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room:"Room 2",
    quantity: 4,
    time: '1n/2d',
  },
  {
    key: '3',
    name: 'Thiện',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room:"Room 3",
    quantity: 5,
   time: '1n/1d',
  },
  {
    key: '4',
    name: 'Việt ',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room:"Room 4",
    quantity: 8,
    time: '3n/2d',
  },
  {
    key: '5',
    name: 'An',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room:"Room 6",
    quantity: 8,
    time: '3n/2d',
  },
  {
    key: '1',
    name: 'Thắng',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room: "Room 1",
    quantity: 3,
    time: '2n/1d',
  },
  {
    key: '2',
    name: 'Thu',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room:"Room 2",
    quantity: 4,
    time: '1n/2d',
  },
  {
    key: '3',
    name: 'Thiện',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room:"Room 3",
    quantity: 5,
   time: '1n/1d',
  },
  {
    key: '4',
    name: 'Việt ',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room:"Room 4",
    quantity: 8,
    time: '3n/2d',
  },
  {
    key: '5',
    name: 'An',
    email: 'john.brown@gmail.com',
    phone: '0865198615',
    room:"Room 6",
    quantity: 8,
    time: '3n/2d',
  },
];
const ListBookPage = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
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
        title:'Quantity',
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
        title: 'Hình ảnh',
        // render: (record) => {
        //   return (
        //     <>
        //      {record.image[0]?<img src={record.image[0].url} width='80px'></img>:<>...</>}
        //     </>
        //   );
        // },
      },
      {
        title: 'Trạng thái',
        render: (record) => {
          return (
            record.status?<>Mở</>:<>Khóa</>
          )}
      },
  ];
  return <Table columns={columns} dataSource={data} />;
};
export default ListBookPage;