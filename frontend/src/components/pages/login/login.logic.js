
export class login{

    
    constructor(){

    }

    storeLocalStarage(){
        localStorage.setItem("login", JSON.stringify({ auth: true }));
    }
}

