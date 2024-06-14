import React from 'react';
import SmallChip from './assets/small-chip.svg';
import Diamond from './assets/diamond.png';

interface TableTopDataProps {
  displayCount: number;
  displayGems: number;
  leaderboardPosition: number | null;
  imageSrc: string;
}

const TableTopData: React.FC<TableTopDataProps> = ({
  displayCount,
  displayGems,
  leaderboardPosition,
  imageSrc,
}) => {
  return (
    <div className="flex items-center justify-between gap-x-4">
      <div className="flex flex-row items-center gap-x-4">
        <img src={imageSrc} alt="Tabletop" className="h-16 w-16" />
        <div className="flex flex-col justify-center space-y-0">
          <div className="flex items-center gap-x-2">
            <img src={SmallChip} alt="Chip" className="h-6 w-6" />
            <span className="select-none text-3xl tabular-nums text-white">
              {displayCount.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={Diamond} alt="Diamond" className="h-6 w-6" />
            <span className="select-none text-3xl tabular-nums text-white">
              {displayGems.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      <span className="select-none text-4xl tabular-nums text-white">{`${leaderboardPosition}`}</span>
    </div>
  );
};

export default TableTopData;
