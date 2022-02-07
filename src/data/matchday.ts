import {model, Schema} from 'mongoose'

export interface MatchDay {}

const {Boolean} = Schema.Types

const matchdaySchema = new Schema(
	{
		deleted: {type: Boolean, required: true, default: false},
	},
	{timestamps: true}
)

export const MatchDayRepo = () => model<MatchDay>(`matchday`, matchdaySchema)
