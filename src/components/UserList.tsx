import useUsers from "../hooks/useUsers";
const UserList = () => {
  const { users, error, isLoading } = useUsers();

  return (
    <>
      <div className="container">
        {error && <p className="text-danger">{error}</p>}

        {isLoading && <div className="spinner-border"></div>}

        <ul className="list-group">
          {users.map((user) => (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between"
            >
              {user.id} - {user.name}
              <div>
                <button className="btn btn-outline-warning mx-2">Update</button>
                <button className="btn btn-outline-danger">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserList;
