import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_FIREBASE_KEY;

export async function createUser(email, password) {
    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
        {
            email,
            password,
            returnSecureToken: true
        }
    );
}