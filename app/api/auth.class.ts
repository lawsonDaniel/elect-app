import api from "."
class Auth {
    public login = async(data:any)=>{
        try{
            const res = await api.post('/auth/login', data);
            return res
        }catch(err:any){
            throw new Error(err)
        }
    }
    public rerister = async(data:any)=>{
        try{
            const res = await api.post('/auth/register',data);
            return res
        }catch(err:any){
            throw new Error(err)
        }
    }
}

export const Authclass = new Auth();

