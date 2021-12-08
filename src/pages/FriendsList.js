import { useEffect, useState } from 'react';
import { serverIp } from '../constants';
import axios from 'axios';
import Header from '../components/Header';

function FriendsList() {
    const [users, setUsers] = useState([]);

    useEffect(async () => {
        const res = await axios.post(`${serverIp}/friends_list`);
        if(res.status == 200){
            console.log(res.data);
            setUsers(res.data);
        }
    }, [])

    const friends =
    <div>
        {users.map((user) => {
            return <p key={user}>{user}</p>;
        })}
    </div>;

    return (
        <div>
            <Header/>
            {friends}
        </div>
    );
}

export default FriendsList;
