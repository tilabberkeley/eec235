import React from 'react'
import ScheduleItem from "./ScheduleItem"
import Table from 'react-bootstrap/Table'
import './Schedule.css'


const Schedule = () => {
    return (
        <div className="schedule-container">
        <Table striped bordered hover className=''>
                <thead>
                <tr>
                    <th>Week</th>
                    <th>Date</th>
                    <th>Topic</th>
                    <th>Reading</th>
                    <th>Assignment</th>
                </tr>
                </thead>
                <tbody>
                <ScheduleItem week='1' date='1/19' topic='Introduction' reading=''/>
                <ScheduleItem week='' date='1/21' topic='Some Stuff' reading=''/>
                <ScheduleItem week='2' date='1/26' topic='Other Stuff' reading=''/>
                <ScheduleItem week='' date='1/28' topic='More Stuff' reading=''/>
                <ScheduleItem week='3' date='2/2' topic='More Stuff' reading=''/>
                <ScheduleItem week='' date='2/4' topic='More Stuff' reading=''/>
                <ScheduleItem week='4' date='2/9' topic='More Stuff' reading=''/>
                <ScheduleItem week='' date='2/11' topic='More Stuff' reading=''/>
                <ScheduleItem week='5' date='2/16' topic='More Stuff' reading=''/>
                <ScheduleItem week='' date='2/18' topic='More Stuff' reading=''/>
                <ScheduleItem week='6' date='2/23' topic='More Stuff' reading=''/>
                <ScheduleItem week='' date='2/25' topic='More Stuff' reading=''/>
                <ScheduleItem week='7' date='3/2' topic='More Stuff' reading=''/>
                <ScheduleItem week='' date='3/4' topic='More Stuff' reading=''/>
                <ScheduleItem week='8' date='3/9' topic='More Stuff' reading=''/>
                <ScheduleItem week='' date='3/11' topic='More Stuff' reading=''/>
                <ScheduleItem week='9' date='3/16' topic='More Stuff' reading=''/>
                <ScheduleItem week='' date='3/18' topic='More Stuff' reading=''/>
                <ScheduleItem week='10' date='3/23' topic='More Stuff' reading=''/>
                <ScheduleItem week='' date='3/25' topic='More Stuff' reading=''/>
                <ScheduleItem week='11' date='3/30' topic='More Stuff' reading=''/>
                <ScheduleItem week='' date='4/1' topic='More Stuff' reading=''/>
                <ScheduleItem week='12' date='4/6' topic='More Stuff' reading=''/>
                <ScheduleItem week='' date='4/8' topic='More Stuff' reading=''/>
                <ScheduleItem week='13' date='4/13' topic='More Stuff' reading=''/>
                <ScheduleItem week='' date='4/15' topic='More Stuff' reading=''/>
                <ScheduleItem week='14' date='4/20' topic='More Stuff' reading=''/>
                <ScheduleItem week='' date='4/22' topic='More Stuff' reading=''/>
                <ScheduleItem week='15' date='4/27' topic='More Stuff' reading=''/>
                <ScheduleItem week='' date='4/29' topic='More Stuff' reading=''/>
                <ScheduleItem week='16' date='5/4' topic='More Stuff' reading=''/>
                <ScheduleItem week='' date='5/6' topic='More Stuff' reading=''/>
                </tbody>
        </Table>
        </div>
    )
}

export default Schedule
