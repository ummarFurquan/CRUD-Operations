import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../reducer/UserReducer';
function Home() {

    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteUser({
            id: id
        }))
    }
    // console.log(users)

  return (
    <div className='my-5 mx-5'>   
         <div className='container'>
        <h2>APP</h2>
            <Link to="/create" className='btn btn-success my-3'>Create + </Link>
            <div className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>

                            <td>
                                <Link to={`/update/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                <button onClick={() => handleDelete(user.id )} className='btn btn-sm btn-danger ms-2'>DELETE</button>
                            </td>

                        </tr>
                    ))}

                </tbody>
            </div>

    </div>
    </div>

  )
}

export default Home
