import React from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';

const { Meta } = Card;

const Main = () => {
    return (
        <div className="form-usuario">
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Button type="primary" shape="circle">
                A
            </Button>
            <Button danger shape="circle" icon={<HeartTwoTone twoToneColor="#eb2f96" />} />
        </div>
    );
}

export default Main;