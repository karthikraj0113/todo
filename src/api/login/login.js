import { api } from "../api";


export async function  Login  (data) {
    return api.post('auth/login',data)
}

export async function  authMe  () {
    return api.get('auth/me')
}

export async function  Refresh  (data) {
    return api.post('auth/refresh',data)
}