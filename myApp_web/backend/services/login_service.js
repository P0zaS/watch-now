import { findByUserEmail } from '../repositories/users_repository.js'
import {generateJWT, hash } from "../security/security.js"
import bcrypt from "bcrypt"

export function doLogin(login) {
    return new Promise((res, rej) => {
        findByUserEmail(login.email)
        .then(user => {
            bcrypt.compare(login.password, user.password, function (err, result) {
                if (result) {
                    let token = generateJWT(user)
                    res(token)
                } else {
                    rej("Invalid Credentials")
                }
            });
        }).catch(err => {
            rej("Invalid Credentials")
        })
    })
}