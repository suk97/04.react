import React from "react";


function InputUser({name, lastName, onChange, onAdd}) {
    return (
        <div>
            <input
                name="name"
                placeholder="name"
                onChange={onChange}
                value={name}
            />
            <input
                name="lastName"
                placeholder="lastName"
                onChange={onChange}
                value={lastName}
            />
            <button onClick={onAdd}>Add</button>
        </div>
    )
}
export default InputUser;