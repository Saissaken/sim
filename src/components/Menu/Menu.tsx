import React from 'react';
import { useStats } from '../../states/stats';
import { Stat } from '../../models/Stat';
import { MenuButton } from './Menu.styled';

export const Menu: React.FC = () => {
  const stats = useStats();

  function addStat() {
    const statName = prompt('Add new stat', 'name');
    if (!statName) return;

    const statDuration = prompt('Set stat duration in days', '1');
    if (!statDuration) {
      alert('Please add stat duration');
      return;
    }
    const stat = Stat.create(statName, 1);
    stat.humanDuration = parseInt(statDuration);
    stats.add(stat);
  }
  return <MenuButton onClick={addStat}>+</MenuButton>;
};
