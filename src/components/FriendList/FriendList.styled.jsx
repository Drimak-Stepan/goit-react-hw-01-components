import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: #fbfb68;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 10px;

  background-color: ${({ isOnline }) => {
    switch (isOnline) {
      case false:
        return '#ff0000';
      case true:
        return '#008000';
      default:
        return '#fbfb68b';
    }
  }};
`;

export const Avatar = styled.img`
  background-color: #ffffff;
  padding: 5px;
  border-radius: 15px;
  margin-right: 20px;
  margin-left: 20px;
`;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
