import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Saquib Anwar",
      image:
        "https://images.unsplash.com/photo-1586611637670-bd7d9cae86b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      places: 3,
    },
    {
      id: "u2",
      name: "Roxxane",
      image:
        "https://images.unsplash.com/photo-1586445137753-697ccba871f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      places: 2,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
