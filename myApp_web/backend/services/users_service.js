import { getAll, createUser } from "../repositories/users_repository.js";
import { hash } from "../security/security.js"

export function getAllUsers() {
    return getAll();
}

export function insertuser(user) {
    return new Promise((res, rej) => {
        if (user && user.email && user.password && user.age && user.name && user.gender) {
            hash(user.password)
                .then(hashedPass => {
                    user.password = hashedPass
                    createUser(user)
                        .then(inserted => {
                            res(inserted)
                        })
                        .catch(err => rej("Error al insertar empleado: " + JSON.stringify(err)))
                })
        } else {
            rej({ "error": "Sintaxis incorrecta" })
        }
    })

}