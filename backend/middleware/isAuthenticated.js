import jwt from 'jsonwebtoken';
const  isAuthenticated = async (req, res, next)=> {
    try {
        // token verification
        const token = req.cookies?.token;

        if(!token)
        {
            return res.status(401).json({
                message : "User not authenticated",
                status : false
            })
        }

        // decode status
        const decode = await jwt.verify(token, process.env.SECRET_KEY)
        if(!decode)
        {
            return res.status(401).json({
                message : "Invalid token",
                status : false,
            })
        }

       req.id = decode._id;
        next();
    } catch (error) {
        console.log(error);
        
    }
}

export default isAuthenticated;