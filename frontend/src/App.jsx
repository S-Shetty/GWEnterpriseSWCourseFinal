import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {


    const [users,setUsers] = useState([]);
    const url = "http://localhost:8080/api/users";
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setUsers(data);

            })
    }, []);


    return (
    <>
      <h1>React Frontend</h1>
        <table>
            <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Active</td>
            </tr>
            </thead>
            <tbody>
            { users.map(user => (
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.active ? "Active": "Inactive"}</td>
                </tr>))}
            </tbody>

        </table>
    </>
  )
}

export default App
