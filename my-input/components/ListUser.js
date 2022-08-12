import React from "react";

function ListUser({ users, onDelete, onUpdateToggle, onSelectUser }) {
    // console.log(users);
    return(
        <div>
            {users.map((user) => (
                // console.log(i)
                <div key={user.id}>
                    <b>{user.name}</b>----<b>{user.lastName}</b>
                    
                    <button key={user.id} onClick={() => {onDelete(user.id)}} >del</button>

                    <button key={user.id + "edit-btn"} onClick={() => {onUpdateToggle(); onSelectUser(user);}} >edit</button>
                </div>
            ))}
        </div>
    );
}

export default ListUser;