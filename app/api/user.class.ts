import api from ".";
import axios from "axios";
class User {
    public getAll = async(userType:string | null | undefined,level:string | null | undefined)=>{
        try{
           const res = await api.get(`/user/get/${userType}/${level}`);
            return res
        }catch(err:any){
            throw new Error(err);
        }
    }

    public uploadProfileImage = async (formData: any, userData: any) => {
        try {
          const cloudinaryResponse = await axios.post(
            "https://api.cloudinary.com/v1_1/dulgjpiyf/image/upload",
            formData
          );
          
          const imageUrl = cloudinaryResponse.data.secure_url;
    
          const apiResponse = await api.post('user/upload-profile-image', {
            user:userData,
            link: imageUrl
          });
    
          return apiResponse;
        } catch (error) {
          throw error;
        }
      };
      public getSelf = async()=>{
        try{
            const res = await api.get(`/user/self`);
            console.log(res,'res main')
             return res
         }catch(err:any){
          console.log(err,'err main')
             throw new Error(err);
         }
      }
    }

export const UserClass = new User();