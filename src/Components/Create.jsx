import React, {useState} from 'react'
import { addUser } from '../reducer/UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Create() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const users = useSelector((state) => state.users)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({id: users[users.length - 1].id + 1, name, email}))
        navigate('/')
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>ADD NEW USER</h3>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' className='form-control' placeholder='enter your name' 
                onChange={e => setName(e.target.value)}/>
            </div>

            <div>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' className='form-control' placeholder='enter your email' 
                onChange={e => setEmail(e.target.value)}/>
            </div> <br/>
            <button className='btn btn-info'>SUBMIT</button>
        </form>
        </div>
    </div>
  )
}

export default Create