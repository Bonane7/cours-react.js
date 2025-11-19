import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  console.log(users);

  useEffect(() => {
    // fetching users from API: https://jsonplaceholder.typicode.com/users
// 1. Promises
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>List of user</h1>
      <div className="grid grid-cols-2 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="w-[300px] h-auto bg-blue-500 text-white"
          >
            <h3>Name: {user.name}</h3>
            <p>Adress: {user.address.street}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Users;
