import styled from 'styled-components';

export const MenuButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  position: fixed;
  bottom: 15px;
  right: 15px;
  background-color: #3b3b3b;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  /* font-weight: 400; */
  cursor: pointer;

  &:hover {
    background-color: #6b6b6b;
  }
`;
