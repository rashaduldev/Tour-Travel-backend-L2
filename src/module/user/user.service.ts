import User from "./user.model"

const getUsers=async()=>{
    const result=await User.find()
    return result;
}

// get single user
const getSingleUser=async(id:string)=>{
    const result =await User.findById(id)
    return result;
}
// update single user
const updatesingleUser=async (id:string,data:string)=>{
    const result=await User.findById(id,data)
    return result
}
export const userServices={
    getUsers,
    getSingleUser,
    updatesingleUser
}