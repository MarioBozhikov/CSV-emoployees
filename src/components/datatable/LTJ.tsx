import {FC, useContext} from "react";

import TableData from "../../context/tableData";
import userDuoData from "../../types/userDuoData";

const LJF: FC = () => {
  const {getUserDuo} = useContext(TableData);

  return (
    <table className='w-full bg-white relative overflow-hidden rounded-md max-w-2xl mb-20'>
      <thead>
      <tr className='bg-gray border-b border-grayDark'>
        <th className='border-r'>EmployeeID</th>
        <th className='border-r'>EmployeeID</th>
        <th className='border-r'>ProjectID</th>
        <th>Days worked</th>
      </tr>
      </thead>
      <tbody>
      {getUserDuo.length > 0 ? getUserDuo.map((user: userDuoData, index) => (
        <tr key={index}>
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