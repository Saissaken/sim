import React, { useEffect, useState } from 'react';
import { useStats } from '../../states/stats';
import type { Stat } from '../../models/Stat';
import {
  StatBarBar,
  StatBarName,
  StatBarProgress,
  StatBarContainer,
  StatBarRemaining,
  StatBarETA,
} from './StatBar.styled';

export const StatBar: React.FC<{
  stat: Stat;
}> = ({ stat }) => {
  let barWidth = stat.remainingPercentage;
  if (barWidth < 2) barWidth = 2;
  let barColor = 'green';
  if (barWidth < 80) barColor = 'yellow';
  if (barWidth < 50) barColor = 'orange';
  if (barWidth < 20) barColor = 'red';

  const [, setTime] = useState(Date.now());

  const stats = useStats();

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function editName() {
    const name = prompt('Stat name', stat.name);
    if (!name) {
      stats.remove(stat);
      return;
    }
    stat.name = name;
    stats.update(stat);
  }

  function editDuration() {
    const duration = prompt('Duration in days', stat.humanDuration.toString());
    if (!duration) return;
    stat.humanDuration = parseInt(duration);
    stats.update(stat);
  }

  return (
    <StatBarContainer>
      <StatBarName onClick={editName}>{stat.name}</StatBarName>
      <StatBarBar onClick={editDuration}>
        <StatBarProgress width={barWidth} color={barColor} />
        <StatBarRemaining>{stat.remainingPercentage}%</StatBarRemaining>
      </StatBarBar>
      <StatBarETA>{stat.humanRemaining}</StatBarETA>
    </StatBarContainer>
  );
};
