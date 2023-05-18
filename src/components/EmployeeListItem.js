export default function EmployeeListItem({employee})
{
    return (
        <div className='employee-box'>

            <h3>{employee.name}</h3>
            <p>{employee.position}</p>

        </div>
    )
}
