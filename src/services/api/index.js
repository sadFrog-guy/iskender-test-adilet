import axios from 'axios';

const baseURL = 'https://app.moore22.store' || process.env.REACT_APP_API_URL;

const api = axios.create({ baseURL });

export default api;


const instance_url = axios.create({
    // withCredentials: true,
    baseURL: baseURL,
    headers: {
        "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
    }
})

export const registerClient = async (user) => {
    const res = instance_url.post('/client/registerClient', { ...user })
    return res
}
export const registerByEmail = async (user) => {
    const res = instance_url.post('/client/registerClientEmail', { ...user })
    return res
}
export const regenerateSmsCode = async (phone) => {
    const res = instance_url.post('/client/regenerateSmsCode', { phone })
    return res
}//
export const regenerateEmailCode = async (email) => {
    const res = instance_url.post('/client/regenerateSmsCode', { email })
    return res
}//
export const verifyClients = async ({phone, code}) => {
    const res = instance_url.post('/client/verify', {phone, code})
    return res
}
export const verifyClientsEmail = async ({email, code}) => {
    const res = instance_url.post('/client/verifyEmail', { email,code})
    return res
}

export const loginClientPhone = async ({ phone, password }) => {
    const res = await instance_url.post('/client/loginClient/', { phone, password })
    return res
}
export const loginClientEmail = async ({ email, password }) => {
    const res = await instance_url.post('/client/loginClientEmail', { email, password })
    return res
}

export const verifyPasswordReset = async ({phone, code}) => {
    const res = instance_url.post('/client/registerClientEmail', {phone, code})
    return res
}
export const verifyPasswordResetEmail = async ({email, code}) => {
    const res = instance_url.post('/client/registerClientEmail', { code})
    return res
}


