import mongoose, { Schema, model, models, Model } from 'mongoose'

export interface IUserSchema {
    _id: string,
    username: string,
    displayName?: string
}

export const UserSchema = new Schema({
    _id: String,
    username: String,
    displayName: {
        type: String,
        required: false
    },
})

const UserModel: Model<IUserSchema> = models.User || model<IUserSchema>('User', UserSchema)

export default UserModel