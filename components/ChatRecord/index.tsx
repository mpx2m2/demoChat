import React from 'react'
import styled from 'styled-components'
import WingBlank from 'antd-mobile/lib/wing-blank'
import { showMsgTime, showMsgDate } from '../../lib/showMsgTime'

const StyledWingBlank = styled(WingBlank)`
    margin-bottom:60px;
    margin-top:45px;
`

export default function ({ data, myUserid, componentRender, showTimeInterval }) {
    return (
        <StyledWingBlank>
            {
                data.map((singleRecord, index) => {
                    const ReactNode = componentRender[singleRecord.type]
                    const ShowTime = componentRender["time"]
                    return (
                        <div key={index}>
                            {
                                index === 0 || showMsgTime(data, index, showTimeInterval) ?
                                    <ShowTime singleRecord={singleRecord} showDate={index === 0 || showMsgDate(data, index)} /> : null
                            }
                            <ReactNode singleRecord={singleRecord} myUserid={myUserid} />
                        </div>
                    )
                })
            }
        </StyledWingBlank>
    )
}