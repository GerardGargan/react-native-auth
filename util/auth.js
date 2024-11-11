import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_FIREBASE_KEY;
const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';

async function authenticate(mode, email, password) {
    const url = `${BASE_URL}${mode}?key=${API_KEY}`;

    const response = await axios.post(url, 
        {
        email,
        password,
        returnSecureToken: true
    });

    const token = response.data.idToken;
    return token;
}

export function createUser(email, password) {
    return authenticate('signUp', email, password);
}

export function login(email, password) {
    return authenticate('signInWithPassword', email, password);
}