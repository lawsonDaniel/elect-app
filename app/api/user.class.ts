import api from ".";

class User {
    public getAll = async(userType:string | null | undefined,level:string | null | undefined)=>{
        try{
           const res = await api.get(`/user/get/${userType}/${level}`);
            return res
        }catch(err:any){
            throw new Error(err);
        }
    }
}
export const UserClass = new User();