import React from 'react'

function Number({resource}) {
    const number = resource.number.read()
    return (
        <div>
              {number}
        </div>
    )
}

function User({resource}) {
    const user = resource.person.read()
    return (
        <div style={{border: '5px black solid'}} >
            {user.name.title}
            <br/>
            <img src={user.picture.medium} alt={user.name.title}/>
        </div>
    )
}


export {Number, User}
