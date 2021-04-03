import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userEmailState = atom({
  key: 'userEmail',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
