export const arrangeUser = (users:string,usersList:[any])=>{
   //get the index of the user
    const valueIndex = usersList.indexOf((user:any) => user?.id === users)
    usersList.unshift(usersList.splice(valueIndex,1)[0])
    return usersList

}