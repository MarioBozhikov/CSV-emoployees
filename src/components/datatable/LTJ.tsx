import {FC, useContext} from "react";

import TableData from "../../context/tableData";
import userDuoData from "../../types/userDuoData";
import styles from "./LTJ.module.css";
const LJF: FC = () => {
  const {getUserDuo} = useContext(TableData);

  return (
    <table className={styles.component}>
      <thead>
      <tr className={styles.trHead}>
        <th>EmployeeID</th>
        <th>EmployeeID</th>
        <th>ProjectID</th>
        <th>Days worked</th>
      </tr>
      </thead>
      <tbody>
      {getUserDuo.length > 0 ? getUserDuo.map((user: userDuoData, index) => (
        <tr className={styles.trBody} key={index}>
          <td>{user.firstEmployee}</td>
          <td>{user.secondEmployee}</td>
          <td>{user.projectId}</td>
          <td>{user.mutualDays}</td>
        </tr>
      )) : null}
      </tbody>
    </table>
  )
};

export default LJF;