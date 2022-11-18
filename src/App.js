import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import UsersList from "./components/usersList/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      console.log("res", res);
      setUsers(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <UsersList key={users.id} users={users} />
    </div>
  );
}

export default App;
