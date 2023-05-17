import { useEffect, useState } from 'react';
import './App.css';
import Data from './Component/Data/Data.json'
import User from './Component/User/User'
import Added from './Component/Added/Added'


function App() {
  const [data, setData] = useState([Data]);
  useEffect(() => {
    setData(Data);
  }, []);

  const [ friend, setFriend] = useState([]);  

  const handleAddFriend = (data) => {
    const newFriend = [...friend, data]
    setFriend(newFriend)
  }

  
  return (
    <div className='App'>
      <div className="info">
        <h1>Users Loaded: {data.length}</h1>
        <h1>Friends Added: {friend.length}</h1>
        <Added friend= {friend}></Added>
      </div>

      <div className="container">
        {
          data.map((user) => (
              <User user= {user} handleAddFriend={handleAddFriend} key={user.id}></User>
          ))
        }
      </div>
    </div>
  );
}

export default App;
