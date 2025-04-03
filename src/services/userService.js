const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/users`;

//GET request to /users to fetch user data from the server
const index = async () => {
    try {

        const res = await fetch(BASE_URL, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        } //Making an authenticated request
        ); // make the request

        const data = await res.json();

        if (data.error) {
            throw new Error(data.err);
        }

        return data
    } catch (error) {
        console.log(error);
        // throw new Error(err); // don't want to crash
    }
};


export {
    index,
};