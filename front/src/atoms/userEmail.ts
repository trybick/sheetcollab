import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userEmailState = atom<string>({
  key: 'userEmail',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
