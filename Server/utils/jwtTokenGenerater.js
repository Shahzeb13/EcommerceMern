import jwt from "jsonwebtoken"

export const jwtTokenGenerater = (payload) => {

    // const payload = {
    //     userId: user._id,
    //     email: user.email,
    //     role: user.role
    // }

    const token = jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1h" });

    return {token};
}

