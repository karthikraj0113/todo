import Cookies from "js-cookie";
import { api} from "../../api/api";
import { Login,authMe,Refresh } from "../../api/login/login";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';


let JwtSample = () => {
    useEffect(() => {
        let data = {
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 30, // optional, defaults to 60
        }
        Login(data).then(res => {
            Cookies.set("Auth-token", res.data.accessToken)
            Cookies.set("Refresh-token", res.data.refreshToken)
            // setToken(res.data.accessToken);
            // setRefreshToken(res.data.refreshToken)
            // console.log("refreshToken", jwtDecode(res.data.refreshToken))
            // console.log("accessToken", jwtDecode(res.data.accessToken))
        }).catch(e => {
            console.log(e)
        })

    }, [])

    return (
        <div>
            <button onClick={() => {
               authMe().then(res => {
                    Swal.fire({
                        icon: 'success',
                        title: ' Token there'
                    })
                }).catch(e => {
                    Swal.fire({
                        icon: 'error',
                        title: 'No Token'
                    })
                })
            }}>On click to Auth</button>
            <br />
            <button onClick={() => {
               Refresh({
                    refreshToken: Cookies.get("Refresh-token"), // Optional, if not provided, the server will use the cookie
                    expiresInMins: 30,
                }).then(res => {
                    Cookies.set("Auth-token", res.data.accessToken)
                    Cookies.set("Refresh-token", res.data.refreshToken)
                    Swal.fire({
                        icon: 'success',
                        title: ' Token there'
                    })
                }).catch(e => {
                    Swal.fire({
                        icon: 'error',
                        title: 'No Token'
                    })
                })
            }}>to Refresh Access token</button>
        </div>
    )

}

export default JwtSample