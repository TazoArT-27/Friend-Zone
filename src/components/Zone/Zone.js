import React, { useState } from 'react';
import FakeData from '../../FakeData/FakeData';
import FriendList from '../FriendList/FriendList'
import './Zone.css';
import SideBar from '../SideBar/SideBar';


const Zone = () => {
    console.log(FakeData)
    const first = FakeData.slice(0, 10);
    const [friends, setFriends] = useState(first);
    const [bar, setBar] = useState([]);

    const handleAddFriend = (friend) => {
        const newBar = [...bar, friend];
        setBar(newBar);
    }
    return (
        <div>
         <div className="container-fluid">
             
               
            <div className="col-md-10 mx-auto">
                 <div className="zone-container">
                    <div className="friend-list">
                        
                            {
                                friends.map((friend, index) => <FriendList handleAddFriend={handleAddFriend} key={index} friend={friend}></FriendList>)
                            }

                        
                        
                    </div>
                    <div className="side-list">
                        <SideBar bar={bar}></SideBar>
                    </div>
               </div>
            </div>
             
         </div>
            
        </div>
    );
};

export default Zone;