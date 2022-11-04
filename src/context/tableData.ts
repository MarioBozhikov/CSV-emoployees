import userDuoData from "../types/userDuoData";
import {createContext, SetStateAction} from "react";
export interface tableDataProps {
  getUserDuo: userDuoData[];
  setUserDuo: (value: SetStateAction<userDuoData[]>) => void;
}
const tableData = createContext<tableDataProps>({getUserDuo: [], setUserDuo: () => {}});

export default tableData;