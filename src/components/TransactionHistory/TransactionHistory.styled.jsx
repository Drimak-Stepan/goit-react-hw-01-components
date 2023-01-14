import styled from '@emotion/styled';

export const Table = styled.table`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  width: 320px;
`;

export const Thead = styled.thead`
  background-color: rgb(51, 69, 230);
  color: #ffffff;
`;

export const TheadChild = styled.th`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const BodyTr = styled.tr`
  text-align: center;

  :nth-of-type(2n) {
    background-color: #fbfb68;
  }
`;

export const BodyItem = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;
  color: rgb(51, 69, 230);
`;
