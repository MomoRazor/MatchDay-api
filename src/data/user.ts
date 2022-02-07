import {model, Schema} from 'mongoose'

export interface User {
	uid: string
	displayName: string
	phoneNumber: string
	email: string
	football?: UserFootballInfo
	tennis?: UserTennisInfo
	tableTennis?: UserTableTennisInfo
	basketball?: UserBasketballInfo
	billiards?: UserBilliardsInfo
	jogging?: UserJoggingInfo
	profileImageUrl?: string
}

export interface UserFootballInfo {}

export interface UserTennisInfo {}

export interface UserTableTennisInfo {}

export interface UserBasketballInfo {}

export interface UserBilliardsInfo {}

export interface UserJoggingInfo {}

const {String, Boolean} = Schema.Types

const userFootballInfo = new Schema({}, {_id: false})

const userTennisInfo = new Schema({}, {_id: false})

const userTableTennisInfo = new Schema({}, {_id: false})

const userBasketballInfo = new Schema({}, {_id: false})

const userBilliardsInfo = new Schema({}, {_id: false})

const userJoggingInfo = new Schema({}, {_id: false})

const userSchema = new Schema(
	{
		uid: {type: String, required: true, trim: true},
		displayName: {type: String, required: true, trim: true},
		phoneNumber: {type: String, required: true, trim: true},
		email: {type: String, required: true, trim: true},
		football: {type: userFootballInfo},
		tennis: {type: userTennisInfo},
		tableTennis: {type: userTableTennisInfo},
		basketball: {type: userBasketballInfo},
		billiards: {type: userBilliardsInfo},
		jogging: {type: userJoggingInfo},
		profileImageUrl: {type: String, required: false, trim: true},
		blocked: {type: String, required: false, trim: true},
		deleted: {type: Boolean, required: true, default: false},
	},
	{timestamps: true}
)

userSchema.index(
	{uid: 1},
	{
		unique: true,
		partialFilterExpression: {
			deleted: false,
		},
	}
)

userSchema.index(
	{email: 1},
	{
		unique: true,
		partialFilterExpression: {
			deleted: false,
		},
	}
)

export const UserRepo = () => model<User>(`user`, userSchema)
