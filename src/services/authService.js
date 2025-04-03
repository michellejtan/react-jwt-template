// Use the `VITE_BACK_END_SERVER_URL` environment variable to set the base URL.
// Note the `/auth` path added to the server URL that forms the base URL for
// all the requests in this service.
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/auth`;

const signUp = async (formData) => {
    try {
        const res = await fetch(`${BASE_URL}/sign-up`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.error) {
            throw new Error(data.error);
        }

        if (data.token) {
            localStorage.setItem('token', data.token);
            return JSON.parse(atob(data.token.split('.')[1])).payload; //1 for accessing the second value
        }

        throw new Error('Invalid response from server');
    } catch (error) {
        console.log(error);
        // throw new Error(error); //don't do this, we don't want to crash
    }
};

const signIn = async (formData) => {
    try {
        const res = await fetch(`${BASE_URL}/sign-in`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.error) {
            throw new Error(data.error);
        }

        if (data.token) {
            localStorage.setItem('token', data.token);
            return JSON.parse(atob(data.token.split('.')[1])).payload;
        }

        throw new Error('Invalid response from server');
    } catch (error) {
        console.log(error);
        // throw new Error(error); // don't do this, we don't want to crash
    }
};

export {
    signUp,
    signIn
}; // lecture don't mention export signIn