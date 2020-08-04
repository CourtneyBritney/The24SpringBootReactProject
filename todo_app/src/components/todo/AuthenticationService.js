//*** AuthenticationService.js ***\\

<<<<<<< HEAD
import axios from 'axios';

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        return axios.get('http://localhost:8080/basicauth', 
            {headers: {authorization: this.createBasicAuthToken(username, password)}})
    }


    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }


    registerSuccessfulLogin(username, password) {
        //return 'Basic ' + window.btoa(username + ":" + password)
        //console.log("registerSuccessfulLogin")
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
=======
class AuthenticationService {

    registerSuccessfulLogin(username, password) {
        console.log("registerSuccessfulLogin")
        sessionStorage.setItem('authenticatedUser', username);
>>>>>>> e402014a7f83c6e1b26bd00d385e20e01b299832
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        
        if(user === null) return false
        return true;
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser')
        
        if(user === null) return ''
        return user;
    }
<<<<<<< HEAD

    setupAxiosInterceptors(basicAuthHeader) {
        

        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }

=======
>>>>>>> e402014a7f83c6e1b26bd00d385e20e01b299832
}

export default new AuthenticationService()