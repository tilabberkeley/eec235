
const ScheduleItem = ({ week, date, topic, reading}) => {
    return (
            <tr>
                {week != '' && <td rowSpan='2'>{week}</td>}
                <td>{`${week != '' ? 'Wed' : 'Fri'} ${date}`}</td>
                <td>{topic}</td>
                <td>{reading}</td>
            </tr>
    )
}

export default ScheduleItem
