import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../reducer/UserReducer';

function Update() {
  const {id} = useParams();
  const users = useSelector((state) => state.users);

  const existingUser = users.filter(f => f.id == id);

  const {name, email} = existingUser[0];
  const [updateName, setUpdateName] = useState(name);
  const [updateEmail, setUpdateEmail] = useState(email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {

    event.preventDefault();
    dispatch(updateUser({
      id: id,
      name: updateName,
      email: updateEmail
    }))
    navigate('/')

  }


  return (
       <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>UPDATE USER</h3>

        <form onSubmit={handleUpdate}>
            <div>
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' className='form-control' placeholder='enter your name' 
                 value={updateName} onChange={e => setUpdateName(e.target.value)}/>
            </div>

            <div>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' className='form-control' placeholder='enter your email' 
                value={updateEmail} onChange={e => setUpdateEmail(e.target.value)}/>
            </div> <br/>
            <button className='btn btn-info'>UPDATE</button>
        </form>
        </div>
    </div>
  )
}

export default Update