import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { signUp } from '../../services/authService';
import { UserContext } from '../../contexts/UserContext';


const SignUpForm = () => {
    const navigate = useNavigate();
    // Pass the UserContext object to the useContext hook to access:
    // - The user state (which we're not using here).
    // - The setUser function to update the user state (which we are using).
    //
    // Destructure the object returned by the useContext hook for easy access
    // to the data we added to the context with familiar names.
    const { setUser } = useContext(UserContext);
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        passwordConf: '',
    });

    // destructure our formData into individual vars 
    const { username, password, passwordConf } = formData;

    const handleChange = (evt) => {
        setMessage(''); // thinking backward
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        // console.log(formData); // this line will print the form data to the console
        try {
            const newUser = await signUp(formData);
            // Call the setUser function to update the user state, just like normal.
            setUser(newUser);
            // console.log(newUser);
            // Take the user to the (non-existent) home page after they sign up.
            // We'll get to this shortly!
            navigate('/');
        } catch (error) {
            setMessage(error.message);
        }
    };
    // isFormInvalid function and return statement.


    const isFormInvalid = () => {
        return !(username && password && password === passwordConf);
    };

    return (
        <main>
            <h1>Sign Up</h1>
            <p>{message}</p>
            <form onSubmit={handleSubmit}>
                <div> {/* label group, to do css stuff*/}
                    <label htmlFor='username'>Username:</label>
                    <input
                        type='text'
                        id='name'
                        value={username}
                        name='username'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        name='password'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='passwordConf'>Confirm Password:</label>{/* dan prefer value, name, the same, lecture is "confirm*/}
                    <input
                        type='password'
                        id='confirm'
                        value={passwordConf}
                        name='passwordConf'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div> {/* div for futrue css */}
                    <button disabled={isFormInvalid()}>Sign Up</button> {/* disabled - boolean */}
                    <button onClick={() => navigate('/')}>Cancel</button> {/* cancel and navigate back to home */}
                </div>
            </form>
        </main>
    );
};

export default SignUpForm;