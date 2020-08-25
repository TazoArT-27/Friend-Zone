import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import './FriendList.css'

const FriendList = (props) => {
    const {name, address, email, photo, company} = props.friend;
    return (
        <div>
           <div className="friend d-flex">
                <div className="my-3 mr-4">
                   <img src={photo} alt=""/>
                </div>
                <div className="my-3">
                   <h4 className="friend-name">Name: {name}</h4>
                   <p>Address: {address.city}</p>
                   <p>Email: {email}</p>
                   <p>Company: {company.name}</p>
                   <button onClick={() => props.handleAddFriend(props.friend)} type="button" class="btn btn-primary"><PersonAddIcon></PersonAddIcon> Add Friend</button>
                </div>
            </div>
        </div>
    );
};

export default FriendList;