import { atom } from 'recoil';

export const emailState = atom<string>({
  key: 'emailState',
  default: '',
});

export const userIdState = atom<string>({
  key: 'userIdState',
  default: '',
});

export const userNameState = atom<string>({
  key: 'userNameState',
  default: '',
});

export const confirmPasswordValidState = atom({
  key: 'confirmPasswordValidState',
  default: false,
});

export const isLoginAtom = atom({
  key: 'isLogin',
  default: false,
});

export interface IFriendTypes {
  id: number;
  name: string;
}

export interface IOption {
  content: string;
  isChecked: boolean;
}

export interface IFlag {
  flagName: string;
  hostId: number;
  checkedFriends: IFriendTypes[];
  selectedDates: string[];
  cycle: number;
  minimumTime: number;
  flagPlace: IOption;
  flagMemo: IOption;
  guestId: number[];
  selectedCell: number[];
}

export const friendListAtom = atom<IFriendTypes[]>({
  key: 'friendList',
  default: [
    { id: 0, name: '노키' },
    { id: 1, name: '차차' },
    { id: 2, name: '마크' },
    { id: 3, name: '다다' },
    { id: 4, name: '제이피지' },
    { id: 5, name: '룰루' },
    { id: 6, name: '랄라' },
    { id: 7, name: '롤롤' },
    { id: 8, name: '루루' },
    { id: 9, name: '리리' },
  ],
});

export const makeFlagAtom = atom<IFlag>({
  key: 'makeFlag',
  default: {
    flagName: '', //name
    hostId: -1, // hostId
    checkedFriends: [], //빠져야함
    selectedDates: [], // dates
    cycle: -1, // timeSlot
    minimumTime: 1, // minTime
    flagPlace: {
      // place - isChecked 검사해서 보낼때는 content 또는 '' 전달
      content: '',
      isChecked: false,
    },
    flagMemo: {
      // memo - isChecked 검사해서 보낼때는 content 또는 '' 전달
      content: '',
      isChecked: false,
    },
    guestId: [], // guestId
    selectedCell: [], // possibleDates
  },
});

export const addFriendAtom = atom<IFriendTypes>({
  key: 'addFriend',
  default: {
    id: -1,
    name: '',
  },
});

export const delFriendAtom = atom<IFriendTypes>({
  key: 'delFriend',
  default: {
    id: -1,
    name: '',
  },
});

export const timeTableAtom = atom<boolean[][]>({
  key: 'timeTable',
  default: [
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  ],
});
