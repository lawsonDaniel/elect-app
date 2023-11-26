import { setCookie,parseCookies,destroyCookie } from "nookies";

export const setAuthUser = (userData:any) =>{
   const user = JSON.stringify(userData)
    setCookie(null, 'storedUser', user, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    return ;
}

export const getAuthUser = ()=>{
    const cookies = parseCookies()
    if(cookies?.storedUser){
        let user = cookies?.storedUser
        user = JSON.parse(user)
        return user
    } 
}