import HeaderEmployee from "./HeaderEmployee";
import Data from '../utilities/Data'
import Information from '../utilities/EmployeeInformation'

export default function EmployeePage(props)
{
    return (
        <div className='employee-page'>

            <HeaderEmployee title='Employee' />

            {Data ?
            <div className='employee-page-container'>
                <h3>{Data[0].name}</h3>
                <p>{Data[0].position}</p>
                {Information ?
                    <div >
                        <div className='info'>
                        Call office
                        {Information.callOffice}
                        </div>
                        <div className='info'>
                        Call Mobile
                        {Information.callMobile}
                        </div>
                        <div className='info'>
                        SMS
                        {Information.SMS}
                        </div>
                        <div className='info'>
                        Email
                        {Information.email}
                        </div>
                    </div>
                : <div>No information found</div>}
            </div>
            : <div>No information found</div>}

        </div>
    )
}
