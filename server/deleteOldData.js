const jsonServer = require('json-server');
const express = require('express');
const moment = require('moment');
const fs = require('fs');
const cors = require('cors');
const db = './Json/db.json';
const data = require(db);
const app = express();
app.use(express.json());
app.use(cors());
const router = jsonServer.router(db);

app.use(router);
const deleteOldData = () => {
    const currentDate = moment().toDate();
    const newData = data.userCart.filter(item => {
        const itemDate = moment(item.checkout, 'DD/MM/YYYY', true).toDate().getDate();
        return itemDate >= currentDate.getDate();
    });

    if (newData.length > 0) {
        data.userCart = newData;
        fs.writeFileSync(db, JSON.stringify(data, null, 2));
        console.log('Dữ liệu đã được cập nhật.');
    } else {
        console.log('Không có dữ liệu phù hợp để cập nhật.');
    }
    // console.log("currentDate:", currentDate);
};

deleteOldData();
const port = 8000;
app.listen(port, () => {
    console.log(`JSON Servertrên cổng : ${port}`);
});