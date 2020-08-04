//*** HelloWorldService.js ***\\

import Axios from "axios"

class HelloWorldService{

    executeHelloWorldService() {
        // console.log('executed service')
        return Axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldBeanService() {
        // console.log('executed service')
        return Axios.get('http://localhost:8080/hello-world-bean')
    }

    executeHelloWorldPathVariableService(name) {
        // console.log('executed service')
<<<<<<< HEAD
        //let username = 'in28minutes';
        //let password = 'dummy';

        //let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        return Axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        //,
            //{
                //headers : {
                     //authorization: basicAuthHeader
                 //}
             //}
        );
=======
        let username = 'in28minutes';
        let password = 'dummy';

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        return Axios.get(`http://localhost:8080/hello-world/path-variable/${name}`),
            {
                headers : {
                    authorization: basicAuthHeader
            }
        }
>>>>>>> e402014a7f83c6e1b26bd00d385e20e01b299832
    }
}

export default new HelloWorldService()