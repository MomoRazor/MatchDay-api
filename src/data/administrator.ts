import {model, Schema} from 'mongoose'

export interface Administrator {
	uid: string
	displayName: string
	phoneNumber: string
	email: string
	profileImageUrl?: string
}

const {String, Boolean} = Schema.Types

const administratorSchema = new Schema(
	{
		uid: {type: String, required: true, trim: true},
		displayName: {type: String, required: true, trim: true},
		phoneNumber: {type: String, required: true, trim: true},
		email: {type: String, required: true, trim: true},
		profileImageUrl: {type: String, required: false, trim: true},
		blocked: {type: String, required: false, trim: true},
		deleted: {type: Boolean, required: true, default: false},
	},
	{timestamps: true}
)

administratorSchema.index(
	{uid: 1},
	{
		unique: true,
		partialFilterExpression: {
			deleted: false,
		},
	}
)
administratorSchema.index(
	{email: 1},
	{
		unique: true,
		partialFilterExpression: {
			deleted: false,
		},
	}
)

export const AdministratorRepo = () =>
	model<Administrator>(`administrator`, administratorSchema)
