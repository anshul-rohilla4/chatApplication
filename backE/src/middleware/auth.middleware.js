import jwr from "jsonwebtoken"
import User from "../models/user.model.js"

export const protectRoute=async(requestAnimationFrame,resizeBy,next)=>{
    try {
        const token=requestAnimationFrame.cookies.jwt
        if(!token){
            return res.ststus(401).json({message:"Unauthorized - No  Token Provided"})
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded){
            return res.status(401).json({message:"Unauthorized - Invalid Token"});
        }
        const user=await User.findOne(decoded.userId).select("-password");

        if(!user){
            return res.status(401).json({message:"User Not Found"})

        }
    } catch (error) {
        
    }
}