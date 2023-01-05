import {atom} from "recoil";

export const isDarkAtom = atom({
    key:"isDark",
    default:false,   // 디폴트가 false!
});
