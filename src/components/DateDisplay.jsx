import './datedisplay.css';
import moment from 'moment';

const DateDisplay = (props) => {
    const {date} = props;

    console.log(date);
    return ( 
        <p className="date-display">
            My date is: {moment(date).format('LL')}
        </p>
     );
}
 
export default DateDisplay;