import { Router } from 'express'
import { UserController } from '../controllers/user.controller.js'

const router = Router()
const controller = new UserController()

router.get('/', async (req, res) => {
    try {
        const users = await controller.getUsers()
        res.status(200).send({ status: 'OK', data: users })
    } catch (err) {
        res.status(500).send({ status: 'ERR', data: err.message })
    }
})


router.get('/paginated', async (req, res) => {
    try {
        const users = await controller.getUsersPaginated()
        res.status(200).send({ status: 'OK', data: users })
    } catch (err) {
        res.status(500).send({ status: 'ERR', data: err.message })
    }
})

export default router