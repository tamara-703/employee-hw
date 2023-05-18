import EmployeeListItem from "./EmployeeListItem";
import Data from '../utilities/Data'


export default function EmployeeList()
{
    console.log("showing data: " + Data)
    return (
        <div className='employee-list-box'>

            {Data ? Data.map((employee, index) => {
                console.log(employee)
                return (

                    <EmployeeListItem key={index} employee={employee} />
                )
            }) : <div>No information found</div>}

        </div>
    )
}
