'use client'

import { logIn } from '@/utils/dataControllers/usersController';
import Form from 'next/form'

const LogIn = () => {
    return (
        <Form action={logIn}>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" name='name'/>
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="text" name='password'/>
            </div>
            <button type='submit'>Log in</button>
        </Form>
    );
}

export default LogIn;