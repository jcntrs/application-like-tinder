import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
import { HeartTwoTone, StarTwoTone, CloseOutlined, ReloadOutlined, FireTwoTone, UserOutlined, MessageTwoTone } from '@ant-design/icons';
import data from '../data.json';

const { Meta } = Card;

const Main = () => {

    const [currentUser, setCurrentUser] = useState(data[0]);
    console.log(currentUser)

    useEffect(() => {

    });

    return (
        <div className="form-usuario">
            <Card title={
                <>
                    <UserOutlined style={{ color: '#eb2f96' }} />
                    <FireTwoTone style={{ marginLeft: 70, fontSize: 21 }} twoToneColor="#eb2f96" />
                    <MessageTwoTone style={{ marginLeft: 67 }} twoToneColor="#eb2f96" />
                </>
            }
                hoverable
                style={{ width: 240 }}
                cover={<img alt="userImage" style={{height: 300}} src={currentUser.imageURL} />}
            >
                <Meta title={`${currentUser.name}, ${currentUser.age}`} description={currentUser.desc} />
                <Button style={{ marginTop: 15, marginLeft: 8, marginRight: 7, borderColor: '#f9c809', color: '#f9c809' }} danger shape="circle" icon={<ReloadOutlined />} />
                <Button style={{ marginTop: 15, marginLeft: 8, marginRight: 8, borderColor: '#fd5674', color: '#fd5674' }} danger shape="circle" icon={<CloseOutlined />} />
                <Button style={{ marginTop: 15, marginLeft: 8, marginRight: 8, borderColor: '#52e8cc' }} danger shape="circle" icon={<HeartTwoTone twoToneColor="#52e8cc" />} />
                <Button style={{ marginTop: 15, marginLeft: 7, marginRight: 8, borderColor: '#27c3f9' }} danger shape="circle" icon={<StarTwoTone twoToneColor="#27c3f9" />} />
            </Card>
        </div>
    );

}

export default Main;