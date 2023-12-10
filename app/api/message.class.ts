import api from ".";

class Message {
    public getStaffMessage = async()=>{
        try{
            const res =  await api.get('/message/get-message');
            return res;
        }catch(err:any){
            throw new Error(err)
        }
    }
    public sendStaffMessage = async(data:any)=>{
        try{
            const res =  await api.post('/message/staff-message',data);
            return res;
        }catch(err:any){
            throw new Error(err);
        }
    }
}

export const MessageClass = new Message();