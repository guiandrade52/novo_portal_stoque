import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 60px;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid #DDD;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-style: italic;
  color: #333;
`;

export const ItemContainer = styled.ul`
  margin-left: 70px;
`;

export const Items = styled.li`
  list-style: none;
  display: inline;
  margin: 20px;
  font-weight: bold;
  color: #333;
  :hover{
    color: #CCC;
  }
`;
