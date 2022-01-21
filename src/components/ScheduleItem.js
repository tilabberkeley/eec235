import "./ScheduleItem.css"

const ScheduleItem = ({ week, date, topic, recordingLink, reading, assignment}) => {
    return (
            <tr>
                {assignment != null && <td className={parseInt(week) % 2 === 0 ? "" : "gray-bg"} rowSpan='2'>{week}</td>}
                <td className={parseInt(week) % 2 === 0 ? "" : "gray-bg"}>{`${assignment === '' ? 'Wed' : 'Fri'} ${date}`}</td>
                <td className={parseInt(week) % 2 === 0 ? "" : "gray-bg"}>{topic}<br/>{recordingLink != null ? <span className="badge rounded-pill bg-dark light-text"><a target="_blank" className="light-text" href={recordingLink}>webcast</a></span> : "" }</td>
                <td className={parseInt(week) % 2 === 0 ? "" : "gray-bg"}>{reading}</td>
                {assignment != null && <td className={parseInt(week) % 2 === 0 ? "" : "gray-bg"} rowSpan='2'>{assignment}</td>}
                {/* <td>{reading}</td> */}
            </tr>
    )
}

export default ScheduleItem
