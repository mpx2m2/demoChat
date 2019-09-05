import React from 'react'
import styled from 'styled-components'
import Flex from 'antd-mobile/lib/flex'

const TabChatBar = styled(Flex)`
    background:#F5F6F6;
    position:fixed;
    z-index:100;
    bottom:0;
    width:100%;
    max-width:992px;
    height:50px;
    border-top: 1px solid #DCDCDC;
`
const Icon = styled.img<{ marginRight?: boolean, marginLeft?: boolean }>`
    width:28px;
    height:28px;
    margin-right:${props => props.marginRight ? "10px" : 0};
    margin-left:${props => props.marginLeft ? "10px" : 0};
`
const ChatInput = styled.input`
    border-radius:5px;
    padding-left:10px;
    border:none;
    height:32px;
    width:100%;
`

export default function () {
    return (
        <TabChatBar>
            <Icon marginRight marginLeft src="/static/images/icon1.png" />
            <ChatInput />
            <Icon marginLeft src="/static/images/icon2.png" />
            <Icon marginRight marginLeft src="/static/images/icon3.png" />
        </TabChatBar>
    )
}