'use client'

import { createUser } from '@/utils/dataController';
import Form from 'next/form'

const CreateAccount = () => {
    return (
        <Form action={createUser}>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" name='name'/>
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="text" name='password'/>
            </div>
            <button type='submit'>Sign in</button>
        </Form>
    );
}
 
export default CreateAccount;