import api from "."
class Auth {
    public login = async(data:any)=>{
        try{
            const test = await api.get('/auth/login')
            console.log(test)
        }catch(err:any){
            throw new Error(err)
        }
    }
}

export const Authclass = new Auth();

