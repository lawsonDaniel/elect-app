export const arrangeUser = (user:string,usersList:[any])=>{
   //get the index of the user
    const valueIndex = usersList.indexOf((user:any) => user.id === user)
    //check if the exist
    if(valueIndex !== -1){
        //if the user is frond move the user to the front 
        usersList.unshift(usersList.splice(valueIndex,1)[0])
    }




}