import React from 'react'
import ScheduleItem from "./ScheduleItem"
import Table from 'react-bootstrap/Table'
import './Schedule.css'


const Schedule = () => {
    return (
        <div className="schedule-container">
        <Table bordered className=''>
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
                <ScheduleItem week='1' date='1/19' topic='Overview and Nanofabrication with photons' recordingLink='https://www.youtube.com/watch?v=eYpbcWZkglY' reading='' assignment=''/>
                <ScheduleItem week='1' date='1/21' topic='Nanofabrication with electrons and ions' recordingLink='https://www.youtube.com/watch?v=oibHB90KQAI' reading=''/>
                <ScheduleItem week='2' date='1/26' topic='Nanofabrication with scanning probe' reading=''assignment=''/>
                <ScheduleItem week='2' date='1/28' topic='Nano-imprint and soft lithography' reading=''/>
                <ScheduleItem week='3' date='2/2' topic='Self-assembly with strong bonds' reading='' assignment=''/>
                <ScheduleItem week='3' date='2/4' topic='Self-assembly with weak bonds' reading=''/>
                <ScheduleItem week='4' date='2/9' topic='Protein and DNA nanotechnology' reading='' assignment=''/>
                <ScheduleItem week='4' date='2/11' topic='Bionanotechnologies' reading=''/>
                <ScheduleItem week='5' date='2/16' topic='Serial methods' reading='' assignment=''/>
                <ScheduleItem week='5' date='2/18' topic='Directed Self-Assembly' reading=''/>
                <ScheduleItem week='6' date='2/23' topic='Precision placement and other techniques' reading='' assignment=''/>
                <ScheduleItem week='6' date='2/25' topic='Electron and probe microscopies' reading=''/>
                <ScheduleItem week='7' date='3/2' topic='Solution-based techniques and optical nanoscopy' reading='' assignment=''/>
                <ScheduleItem week='7' date='3/4' topic='Tutorials: Top Down' reading=''/>
                <ScheduleItem week='8' date='3/9' topic='Tutorials: Top Down' reading='' assignment=''/>
                <ScheduleItem week='8' date='3/11' topic='Tutorials: Top Down' reading=''/>
                <ScheduleItem week='9' date='3/16' topic='Tutorials: Top Down' reading='' assignment=''/>
                <ScheduleItem week='9' date='3/18' topic='Tutorials: Bottom Up' reading=''/>
                <ScheduleItem week='10' date='3/23' topic='Spring Break' reading='' assignment=''/>
                <ScheduleItem week='10' date='3/25' topic='Spring Break' reading=''/>
                <ScheduleItem week='11' date='3/30' topic='Tutorials: Bottom Up' reading='' assignment=''/>
                <ScheduleItem week='11' date='4/1' topic='Tutorials: Bottom Up' reading=''/>
                <ScheduleItem week='12' date='4/6' topic='Tutorials: Bottom Up' reading='' assignment=''/>
                <ScheduleItem week='12' date='4/8' topic='Tutorials: Integration' reading=''/>
                <ScheduleItem week='13' date='4/13' topic='Tutorials: Integration' reading='' assignment=''/>
                <ScheduleItem week='13' date='4/15' topic='Tutorials: Integration' reading=''/>
                <ScheduleItem week='14' date='4/20' topic='Tutorials: Integration' reading='' assignment=''/>
                <ScheduleItem week='14' date='4/22' topic='Project Presentation' reading=''/>
                <ScheduleItem week='15' date='4/27' topic='Project Presentation' reading='' assignment=''/>
                <ScheduleItem week='15' date='4/29' topic='Project Presentation' reading=''/>
                <ScheduleItem week='16' date='5/4' topic='Project Presentation' reading='' assignment=''/>
                <ScheduleItem week='16' date='5/6' topic='Project Presentation' reading=''/>
                </tbody>
        </Table>
        </div>
    )
}

export default Schedule
