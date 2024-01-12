/* eslint-disable */
export type User = {
  id: string
  email: string
  name: string
}

export type Race = {
  id: number
  name: string
  startTime: string
}

export type RaceResult = {
  id: number
  raceId: number
  horseId: number
  position: number
}

export type Bet = {
  id: number
  userId: string
  raceId: number
  amount: number
  betType: 'WIN' | 'PLACE' | 'SHOW'
  createdAt: string
}
