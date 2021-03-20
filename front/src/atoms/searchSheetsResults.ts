import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const searchSheetsResultsState = atom({
  key: 'searchSheetsResults',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
