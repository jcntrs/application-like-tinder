import React from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
import { HeartTwoTone, StarTwoTone, CloseOutlined, ReloadOutlined, FireTwoTone, UserOutlined, MessageTwoTone } from '@ant-design/icons';

const { Meta } = Card;

const Main = () => {
    return (
        <div className="form-usuario">
            <Card title={
                <>
                    <UserOutlined style={{ color: 'gray' }} />
                    <FireTwoTone style={{ marginLeft: 70, fontSize: 21 }} twoToneColor="#eb2f96" />
                    <MessageTwoTone style={{ marginLeft: 67 }} twoToneColor="#eb2f96" />
                </>
            }
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
                <Button style={{ marginTop: 15, marginLeft: 8, marginRight: 7 }} danger shape="circle" icon={<ReloadOutlined />} />
                <Button style={{ marginTop: 15, marginLeft: 8, marginRight: 8 }} danger shape="circle" icon={<CloseOutlined />} />
                <Button style={{ marginTop: 15, marginLeft: 8, marginRight: 8 }} danger shape="circle" icon={<HeartTwoTone twoToneColor="#eb2f96" />} />
                <Button style={{ marginTop: 15, marginLeft: 7, marginRight: 8 }} danger shape="circle" icon={<StarTwoTone twoToneColor="#eb2f96" />} />
            </Card>
        </div>
    );
}

export default Main;