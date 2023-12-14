import userModel from '../models/user.models.js'

export class UserController {
    constructor() {
    }

    async getUsers() {
        try {
            const users = await userModel.find().lean()
            return users
        } catch (err) {
            return err.message
        }
        
    }

    async getUsersPaginated(page, limit) {
        try {
         
            return await userModel.paginate(
                { gender: 'Female' },
                { offset: (page * 50) - 50, limit: limit, lean: true }
            )
        } catch (err) {
            return err.message
        }
    }
}