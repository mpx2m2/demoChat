import React from 'react'
import styled from 'styled-components'
import WhiteSpace from 'antd-mobile/lib/white-space'

const SystemMsg = styled.div`
    color:#A9A8A9;
    text-align:center;
`

export default function ({ singleRecord, myUserid }) {
    const isMyMessage = myUserid === singleRecord.userId

    return (
        <SystemMsg>
            <WhiteSpace />
            {
                isMyMessage ? `You invited ${singleRecord.newMember} to the group chat` :
                    `${singleRecord.userName} invited ${singleRecord.newMember} to the group chat`
            }
            <WhiteSpace />
        </SystemMsg>
    )
}