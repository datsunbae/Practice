import { useState } from 'react';
import DateDisplay from './DateDisplay';
import './mydatepicker.css';

const MyDatePicker = () => {
    const [date, setDate] = useState(() => {
        var currentDate = new Date();
        return currentDate.toISOString().substring(0,10);
    })

    const handleChangeDate = (e) => {
        setDate(e.target.value);
    }

    return ( <div className="container">
        <input className="date-input" type="date" value={date} onChange={handleChangeDate}>

        </input>
        <DateDisplay date={date}/>
    </div> );
}
 
export default MyDatePicker;