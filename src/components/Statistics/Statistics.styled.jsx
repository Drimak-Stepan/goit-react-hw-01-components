import styled from '@emotion/styled';

export const Article = styled.section`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 320px;
  background-color: #fbfb68;
`;

export const Title = styled.h2`
  padding-top: 20px;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
`;

export const StatList = styled.ul`
  display: flex;
  margin: 20 px 0;
  padding: 0;
`;

export const Item = styled.li`
  padding-top: 20px;
  padding-bottom: 20px;
  width: calc(100% / 5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  color: #ffffff;
  text-shadow: 2px 1px 2px rgb(100, 48, 224);
`;

export const Percentage = styled.span`
  margin-top: 10px;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  text-shadow: 2px 1px 2px rgb(100, 48, 224);
`;
