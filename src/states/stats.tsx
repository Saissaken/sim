import create from 'zustand';
import { Stat } from '../models/Stat';

interface StatsState {
  list: Array<Stat>;
  add: (stat: Stat) => void;
  update: (stat: Stat) => void;
  remove: (stat: Stat) => void;
}

function saveStats(stats: Array<Stat>) {
  const statsData = stats.map((stat) => stat.toString());
  localStorage.setItem('sim_stats', JSON.stringify(statsData));
}

export const useStats = create<StatsState>((set) => {
  const statsData = localStorage.getItem('sim_stats');
  let list: Array<Stat> = [];
  if (statsData) {
    list = Stat.parse(statsData);
  }

  return {
    list,
    add: (stat: Stat) =>
      set((state) => {
        const stats = state.list.concat(stat);
        saveStats(stats);
        return {
          list: stats,
        };
      }),
    update: () => {
      set((state) => {
        saveStats(state.list);
      });
    },
    remove: (stat: Stat) =>
      set((state) => {
        const el = state.list.findIndex((el) => el === stat);
        const list = state.list.slice();
        list.splice(el, 1);
        saveStats(list);
        return {
          list,
        };
      }),
  };
});
