import api from "."
class Auth {
    public login = async(data:any)=>{
        try{
            const test = await api.post('/auth/login', data);
            return test
        }catch(err:any){
            throw new Error(err)
        }
    }
}

export const Authclass = new Auth();

