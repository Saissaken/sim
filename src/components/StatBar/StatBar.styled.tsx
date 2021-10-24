import styled from 'styled-components';

export const StatBarContainer = styled.div`
  margin: 10px;
`;

export const StatBarName = styled.h3`
  color: white;
  margin-bottom: 5px;
  cursor: pointer;
  font-size: 16px;
`;

export const StatBarBar = styled.div`
  width: 100%;
  height: 25px;
  background-color: #333333;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid black;
`;

export const StatBarProgress = styled.div<{ width: number; color: string }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: ${(props) => props.color};
`;

export const StatBarRemaining = styled.div`
  position: absolute;
  background-color: #00000058;
  text-align: center;
  color: white;
  padding: 0 5px;
  border-radius: 5px;
  font-size: 12px;
`;

export const StatBarETA = styled.div`
  text-align: center;
  color: white;
  font-size: 10px;
  width: 100%;
  margin-top: 5px;
`;
