import React from 'react'
import Flex from 'antd-mobile/lib/flex'
import styled from 'styled-components'
import WhiteSpace from 'antd-mobile/lib/white-space'

const UserIcon = styled.img<{ isMyMessage: boolean }>`
    width:48px;
    height:48px;
    border-radius:5px;
    display:block;
    margin-top:${props => props.isMyMessage ? 0 : "10px"};
    flex-shrink:0;
`
const Title = styled.header`
    margin-left:15px;
    color:#737272;
    font-size:13px;
    margin-bottom:5px;
`
const InfoBlock = styled(Flex)`
    position: relative;
`
const Info = styled.section<{ isMyMessage: boolean }>`
    background:${props => props.isMyMessage ? "#A8E97A" : "white"};
    font-size:15px;
    line-height:1.5;
    padding:11px 12px;
    border-radius:5px;
    margin:${props => props.isMyMessage ? "0 15px 0 0" : "0 0 0 15px"};
`
const Arrow = styled.div<{ isMyMessage: boolean }>`
    width:0;
    height:0;
    font-size:0;
    border: 8px solid;
    border-color: ${props => props.isMyMessage ? "#ECEDED #ECEDED #ECEDED #A8E97A" : "#ECEDED white #ECEDED #ECEDED"};
    position: absolute;
    top:16px;
    z-index:10;
`
const Empty = styled.div`
    width:50px;
    height:50px;
    flex-shrink:0;
`
const ChatImg = styled.img<{ isMyMessage: boolean }>`
    display:block;
    max-height:400px;
    max-width:40%;
    margin:${props => props.isMyMessage ? "0 15px 0 auto" : "0 0 0 15px"};
`

export default function ({ singleRecord, myUserid }) {
    const isMyMessage = myUserid === singleRecord.userId

    return (
        <>
            <WhiteSpace />
            <Flex align="start" direction={isMyMessage ? "row-reverse" : "row"}>
                <UserIcon src={singleRecord.userIcon} isMyMessage={isMyMessage} />
                <section>
                    {isMyMessage ? null : <Title> {singleRecord.userName}</Title>}
                    {
                        singleRecord.type === "image" ?
                            <ChatImg isMyMessage={isMyMessage} src={singleRecord.info} /> :
                            <InfoBlock direction={isMyMessage ? "row-reverse" : "row"}>
                                <Arrow isMyMessage={isMyMessage} />
                                <Info isMyMessage={isMyMessage}>
                                    {singleRecord.info}
                                </Info>
                            </InfoBlock>
                    }
                </section>
                <Empty />
            </Flex>
            <WhiteSpace />
        </>
    )
}