import React from "react";

function Number({ resource }) {
  const number = resource.number.read();
  return <p>{number}</p>;
}

function User({ resource }) {
  const user = resource.person.read();
  return (
    <div
      style={{
        display: 'flex',
        border: "5px black solid",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {user.name.title}. {user.name.first} {user.name.last}
  
      <img
        src={user.picture.medium}
        alt={user.name.title}
      />
    </div>
  );
}

export { Number, User };
