import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
import { HeartTwoTone, StarTwoTone, CloseOutlined, ReloadOutlined, FireTwoTone, UserOutlined, MessageTwoTone } from '@ant-design/icons';
import data from '../data.json';

const { Meta } = Card;

const Main = () => {

    const [count, setCount] = useState(0);
    const [currentUser, setCurrentUser] = useState(data[0]);
    const [arrUsers, setArrUsers] = useState([]);
    const [superLikeActive, setSuperLikeActive] = useState(false);
console.log(arrUsers)
    const decreasecCounter = () => {
        if (count > 0) {
            const newArrUsers = [...arrUsers];
            newArrUsers.pop();
            setArrUsers(newArrUsers);
            setCount(count - 1);
        }
    }

    const increaseCounter = type => {
        console.log(type)
        if (count < 6) {
            switch (type) {
                case 'dislike':
                    currentUser.dislikedUsers.push(type);
                    break;
                case 'like':
                    currentUser.likedUsers.push(type);
                    break;
                case 'superlike':
                    currentUser.superLikedUsers.push(type);
                    setSuperLikeActive(true);
                    break;
            }
            setArrUsers([...arrUsers, currentUser]);
            setCount(count + 1);
        } else {
            console.log('Es mayor')
        }
    }

    useEffect(() => {
        (() => {
            setCurrentUser(data[`${count}`]);
            const superLikeUser = arrUsers.filter(element => element.superLikedUsers[0] !== undefined);
            console.log(superLikeUser)
            superLikeUser.length > 0 ? setSuperLikeActive(true) : setSuperLikeActive(false);
        })();
    }, [count]);

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
                cover={<img alt="userImage" style={{ height: 300 }} src={require(`../assets/images/users/${currentUser.image}`)} />}
            >
                <Meta title={`${currentUser.name}, ${currentUser.age}`} description={currentUser.desc} />
                <Button onClick={decreasecCounter} style={{ marginTop: 15, marginLeft: 8, marginRight: 7, borderColor: '#f9c809', color: '#f9c809' }} danger shape="circle" icon={<ReloadOutlined />} />
                <Button onClick={() => increaseCounter('dislike')} style={{ marginTop: 15, marginLeft: 8, marginRight: 8, borderColor: '#fd5674', color: '#fd5674' }} danger shape="circle" icon={<CloseOutlined />} />
                <Button onClick={() => increaseCounter('like')} style={{ marginTop: 15, marginLeft: 8, marginRight: 8, borderColor: '#52e8cc' }} danger shape="circle" icon={<HeartTwoTone twoToneColor="#52e8cc" />} />
                <Button disabled={superLikeActive} onClick={() => increaseCounter('superlike')} style={{ marginTop: 15, marginLeft: 7, marginRight: 8, borderColor: '#27c3f9' }} danger shape="circle" icon={<StarTwoTone twoToneColor="#27c3f9" />} />
            </Card>
        </div>
    );

}

export default Main;