import jwt from "jsonwebtoken"

const ateTokenAndSetCookie = (userId, res) => {
    // @ts-ignore
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d"
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 1000,
        httpOnly: true,
        samesite: "strict",
        secure: process.env.NODE_ENV !== "development"
    })
}

export default ateTokenAndSetCookie;