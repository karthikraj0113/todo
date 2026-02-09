import { api } from "../api";


export async function  Login  (data) {
    return api.post('auth/login',data)
}