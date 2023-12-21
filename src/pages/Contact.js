import { Form, redirect, useActionData } from 'react-router-dom'

const Contact = () => {
    const data = useActionData();

  return (
    <div className='contact_container'>
        <h3>Contact</h3>

        <Form method='post' action='/help/contact'>
            <label>
                <span>Username</span>
                <input type="text" name='username' placeholder='Enter name' />
            </label>
            <label>
                <span>Email</span>
                <input type="email" name='email' placeholder='Enter email' />
            </label>
            <label>
                <span>Password</span>
                <input type="password" name='password' placeholder='Enter password' />
            </label>

            <button type='text'>Submit</button>
        </Form>
        {data && data.error && <p>{data.error}</p>}
    </div>
  )
}
export const contactAction = async ({request}) => {
    const data = await request.formData();

    const submission = {
        username: data.get('username'),
        email: data.get('email'),
        password: data.get('password')
    }

    console.log(submission)

    if(submission.password.length < 6) {
        return { error: "password length must be more than 6 charecters" }
    }

    // redirect user
    return redirect('/');
}

export default Contact