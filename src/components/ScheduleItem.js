import "./ScheduleItem.css"

const ScheduleItem = ({ week, date, topic, reading, assignment}) => {
    return (
            <tr>
                {assignment != null && <td className={parseInt(week) % 2 === 0 ? "" : "gray-bg"} rowSpan='2'>{week}</td>}
                <td className={parseInt(week) % 2 === 0 ? "" : "gray-bg"}>{`${week !== '' ? 'Wed' : 'Fri'} ${date}`}</td>
                <td className={parseInt(week) % 2 === 0 ? "" : "gray-bg"}>{topic}</td>
                <td className={parseInt(week) % 2 === 0 ? "" : "gray-bg"}>{reading}</td>
                {assignment != null && <td className={parseInt(week) % 2 === 0 ? "" : "gray-bg"} rowSpan='2'>{assignment}</td>}
                {/* <td>{reading}</td> */}
            </tr>
    )
}

export default ScheduleItem
