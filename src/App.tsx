import React from 'react';
import styled from 'styled-components';
import { Menu } from './components/Menu/Menu';
import { StatBar } from './components/StatBar/StatBar';
import { useStats } from './states/stats';

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 15px;
  padding: 30px 20px;
  margin-bottom: 80px;
`;

export default function () {
  const stats = useStats();

  return (
    <>
      <StatGrid>
        {stats.list
          .sort((a, b) => a.remaining - b.remaining)
          .map((stat, index) => (
            <StatBar key={index} stat={stat} />
          ))}
      </StatGrid>
      <Menu />
    </>
  );
}
