import React from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

function Chat() {
  return (
    <Container>
      <ChatHeaderContainer>
        <Main>
          <ChannelName>Apparent Extract</ChannelName>
          <ChannelDetials>
            Detials
            <InfoIconContainer>
              <InfoOutlinedIcon />
            </InfoIconContainer>
          </ChannelDetials>
        </Main>
        <ChannelDiscription>New beer announcements</ChannelDiscription>
      </ChatHeaderContainer>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  
`;
const ChatHeaderContainer = styled.div`
border-bottom: 1px solid #532353;
`;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-left: 20px;
`;
const ChannelName = styled.div``;
const InfoIconContainer = styled.div`
  padding-left: 15px;
  display: flex;
  align-items: center;
  heigth: 28px;
  padding-left: 19px;
  padding-right: 12px;
`;
const ChannelDetials = styled.div`
  display: flex;
  align-items: center;
  heigth: 28px;
  padding-left: 19px;
  padding-right: 12px;
`;
const ChannelDiscription = styled.div`
  padding-top: 10px;
  padding-left: 20px;
`;
