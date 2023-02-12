import { getAllUsers, insertuser } from "../services/users_service.js"

export function userController(app) {
    app.get('/user', (req,res) => {
        getAllUsers().then(users => res.send(JSON.stringify(users)));
    })
    app.post('/user', (req, res) => {
        insertuser(req.body).then(employee => {
            res.status(201)
            res.send(employee)
        }).catch(err => {
            res.status(400)
            res.send(err)
        })
    })
}

