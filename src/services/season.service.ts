import DataBaseSingleton from '../db/db.singleton'
import { Seasons } from '../interfaces'

const db = DataBaseSingleton.getInstance()
export const getSeasons = (): Promise<Seasons> => {
  const seasons = db.getAllSeasons()
  const data = new Promise<Seasons>((resolve) => resolve(seasons))
  return data
}
