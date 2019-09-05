import React from 'react'
import styled from 'styled-components'
import WhiteSpace from 'antd-mobile/lib/white-space'

const SystemMsg = styled.div`
    color:#A9A8A9;
    text-align:center;
`

export default function ({ singleRecord, showDate }) {
    return (
        <SystemMsg>
            <WhiteSpace size="lg" />
            {showDate ? singleRecord.time : new Date(singleRecord.time).toTimeString().substring(0, 5)}
            <WhiteSpace size="lg" />
        </SystemMsg>
    )
}