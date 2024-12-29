import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",// after the expiration,user needs to re-login
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, //in milliseconds
        httpOnly: true, //prevents XSS attacks cross-site scripting attacks
        sameSite: "strict", //CSRF cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development",// should be https (httpSecured)
    });
    return token;
};
