export * from './user'

import {UserRepo} from './user'
export const userRepo = UserRepo()
userRepo.syncIndexes()

export * from './administrator'

import {AdministratorRepo} from './administrator'
export const administratorRepo = AdministratorRepo()
administratorRepo.syncIndexes()

export * from './matchday'

import {MatchDayRepo} from './matchday'
export const matchdayRepo = MatchDayRepo()
matchdayRepo.syncIndexes()
