import React from 'react'
import styled from 'styled-components'
import WhiteSpace from 'antd-mobile/lib/white-space'

const SystemMsg = styled.div`
    color:#A9A8A9;
    text-align:center;
`
const EditLink = styled.a`
    color:#2E84D2;
`

export default function ({ singleRecord, myUserid }) {
    const isMyMessage = myUserid === singleRecord.userId

    return (
        <SystemMsg>
            <WhiteSpace />
            {
                isMyMessage ? <span>You recallled a message. <EditLink>Edit</EditLink></span> :
                    `"${singleRecord.userName}" recallled a message.`
            }
            <WhiteSpace />
        </SystemMsg>
    )
}