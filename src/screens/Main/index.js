import React, { useState } from "react";
import Header from "../shared/Header";
import Table from "../shared/Table";

export default function Main() {
  const usersInitial = [
    { idUser: 1, firstName: "Jan", lastName: "Kowalski" },
    { idUser: 2, firstName: "Andrzej", lastName: "Malewicz" },
    { idUser: 3, firstName: "Anna", lastName: "Andrzejewicz" },
    { idUser: 4, firstName: "Marcin", lastName: "Kwiatkowski" },
    { idUser: 5, firstName: "Michał", lastName: "Kowalski" },
  ];

  const [users, setUsers] = useState(usersInitial);
  const [selectedUser, setSelectedUser] = useState({});

  const addUser = (e) => {
    setUsers([
      ...users,
      {
        idUser: users[users.length - 1].idUser + 1,
        firstName: "AAA",
        lastName: "BBB",
      },
    ]);
  };

  const setCurrentlySelectedUser = (user) => {
    setSelectedUser(user);
  };

  const removeUser = () => {
    setUsers(users.filter((u) => u.idUser !== selectedUser.idUser));
  };

  const sortUsers = () => {
    setUsers(users.sort((a, b) => b.idUser - a.idUser).map((u) => u));
  };

  return (
    <>
      <Header />
      <div className="container">
        <br />
        <button
          type="button"
          onClick={addUser}
          className="btn"
          style={{ marginRight: 10 }}
        >
          Dodaj użytkownika
        </button>

        <button type="button" onClick={removeUser} className="btn">
          Usuń wybranego użytkownika
        </button>
        <Table
          users={users}
          setSelectedUser={setCurrentlySelectedUser}
          selectedUser={selectedUser}
          sortUsers={sortUsers}
        />
      </div>
    </>
  );
}
