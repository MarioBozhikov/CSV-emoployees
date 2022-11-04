import React, {useContext} from "react";
import tableData from "../../context/tableData";
import userDuoData from "../../types/userDuoData";

const LJF: React.FC = () => {
  const {getUserDuo} = useContext(tableData);

    if (getUserDuo.length > 0) {
      return (
        <table className='w-full bg-white relative overflow-hidden rounded-md max-w-2xl mb-20'>
          <tr className='bg-gray border-b border-grayDark'>
            <th className='border-r'>EmployeeID</th>
            <th className='border-r'>EmployeeID</th>
            <th className='border-r'>ProjectID</th>
            <th>Days worked</th>
          </tr>
          {getUserDuo.map((user: userDuoData, index) => (
            <tr key={index}>
              <td>{user.firstEmployee}</td>
              <td>{user.secondEmployee}</td>
              <td>{user.projectId}</td>
              <td>{user.mutualDays}</td>
            </tr>
          ))}
        </table>
        )
    } else {
      return null
    }
};

export default LJF;