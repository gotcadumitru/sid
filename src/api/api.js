import axios from "axios"
import { authToken } from "../common/helpers/token.helper";


const instance = axios.create({
    baseURL: "http://localhost:5000/",
})

export const authAPI = {

    async getUserData() {
        return instance.get(`api/auth/me`, {
            headers: {
                'auth-token': authToken.getToken(),
            }
        });


    },

    async register({ name, surname, email, password, ...other }) {
        return instance.post(`api/auth/register`,
            {
                name,
                surname,
                email,
                password
            });
    },
    async login({ email, password }) {
        return instance.post(`api/auth/login`,
            {
                email,
                password
            });
    },
    async changePassword(newPassword, oldPassword) {
        return instance.post(`api/auth/changepassword`,
            {
                newPassword,
                oldPassword
            },
            {
                headers: {
                    'auth-token': authToken.getToken(),
                }
            });
    },
    async logingoogle(token) {
        return instance.post(`api/auth/googlelogin`,
            {
                token
            });
    },
    async loginfacebook(accessToken, userID) {
        return instance.post(`api/auth/facebooklogin`,
            {
                userID,
                accessToken,
            });

    },

    async forgotPassword(email) {
        return instance.post(`api/auth/forgotpassword`,
            {
                email,
            });
    },
    async resetPassword(password, resetToken) {
        return instance.post(`api/auth/resetpassword/${resetToken}`,
            {
                password,
            });
    },
    async confirmRegistration(confirmRegisterToken) {
        return instance.post(`api/auth/confirmRegister/${confirmRegisterToken}`,
            {
            });

    },
}

export const otherAPI = {

    async addOther({ imageURL, name, description }) {
        return instance.post(`api/other/add`,
            {
                name,
                imageURL,
                description,
            },
            {
                headers: {
                    'auth-token': authToken.getToken(),
                }
            });
    },

}


