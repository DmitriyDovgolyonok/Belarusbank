import User from "../schema/user_schema.js"
import CryptoJS from "crypto-js"
//const CryptoJS = require("crypto-js")

export const registration = async (req, res) => {
    const newUser = new User({
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            "abc"
        ).toString(),
        role: req.body.role
    })

    newUser
        .save()
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json({message: "Could not create user",err}))

}

export const login = async (req, res) => {
    User.findOne({email: req.body.email})
        .then((user) => {
            if (!user) {
                return res.status(400).json({message: "User not found"})
            }

            const decryptedPassword = CryptoJS.AES.decrypt(
                user.password,
                "abc"
            ).toString(CryptoJS.enc.Utf8)


            if(decryptedPassword !== req.body.password){
                return res.status(401).json({message: "Incorrect password"})
            }

            res.json(user)
        })
        .catch((err) => res.status(400).json({message: "Could not login user",err}))
}

