import React, { useState } from 'react'
import styled from 'styled-components'
import NavBar from 'antd-mobile/lib/nav-bar'
import Icon from 'antd-mobile/lib/icon'
import TabChatBar from '../components/TabChatBar'
import ChatRecord from '../components/ChatRecord'
import ChatBox from '../components/ChatBox'
import Recall from '../components/Recall'
import InviteInfo from '../components/InviteInfo'
import ShowTIme from '../components/ShowTIme'
import defaultData from '../defaultData'

const StyledNavBar = styled(NavBar)`
    border-bottom: 1px solid #DCDCDC;
    position:fixed;
    top:0;
    width:100%;
    max-width:992px;
    z-index:100;
    opacity:0.97;
`

export default function () {
    const [data, setData] = useState(defaultData)
    const [myUserid, setMyUserid] = useState(1)

    return (
        <div>
            <StyledNavBar
                mode="light"
                icon={<Icon type="left" color="black" />}
                rightContent={<Icon type="ellipsis" color="black" />}
            >
                Group
            </StyledNavBar>
            <ChatRecord
                data={data}
                myUserid={myUserid}
                showTimeInterval={10} //消息时间间隔超过10min则显示时间
                componentRender={{
                    text: ChatBox,
                    image: ChatBox,
                    recall: Recall,
                    invite: InviteInfo,
                    time: ShowTIme
                }}
            />
            <TabChatBar />
        </div>
    )
}