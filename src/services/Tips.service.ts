import DataBaseSingleton from '../db/db.singleton';
import { Tip } from '../interfaces';

const db = DataBaseSingleton.getInstance();
export const getTips = (): Promise<Tip[]> => {
  const tips = db.getAllTips();
  const data = new Promise<Tip[]>((resolve) => resolve(tips));
  return data;
};

export const getOneTip = (id: string): Promise<Tip | null> => {
  const tip = db.getTipById(id);
  const data = new Promise<Tip | null>((resolve) => resolve(tip));
  return data;
};
// export const getTipsByTag = (tags: string[]): Promise<Tip[]> => {
//   const tip = db.getByTag(tags);
//   const data = new Promise<Tip[]>((resolve) => resolve(tip));
//   return data;
// };
