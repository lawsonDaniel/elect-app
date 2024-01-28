import api from ".";

class Article {
    public post = async(data:any)=>{
        try{
            const res = await api.post('/article/post',data);
            return res
        }catch(err:any){
            throw new Error(err)
        }
    }
    public getAll = async()=>{
        try {
            const res = await api.get('/article/all')
            return res
        } catch (err:any) {
            throw new Error(err)
        }
    }
    public getOne = async(articleId:string)=>{
        try {
            const res = await api.get(`/article/one/${articleId}`)
            return res
        } catch (err:any) {
            throw new Error(err)
        }
    }
    public getCreatedByUser =  async()=>{
        try {
           const res = await api.get(`/article/created-by`) ;
           return res;
        } catch (err:any) {
            throw new Error(err)
        }
    }
    public approve = async(articleId:string)=>{
        try {
            const res =  await api.patch(`/article/approve/${articleId}`)
            return res
        } catch (err:any) {
            throw new Error(err)
            
        }
    }

    public delete = async(articleId:string)=>{
        try {
            const res =  await api.delete(`/article/delete/${articleId}`)
            return res
        } catch (err:any) {
            throw new Error(err)
            
        }
    }
}

const article = new Article()
export default article