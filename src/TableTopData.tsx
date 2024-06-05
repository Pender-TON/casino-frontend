import React from 'react';
import SmallChip from './assets/small-chip.svg';
import Diamond from './assets/diamond.png';
interface TableTopDataProps {
    displayCount: number;
    displayGems: number;
    leaderboardPosition: number | null;
    imageSrc: string;
}

const TableTopData: React.FC<TableTopDataProps> = ({ displayCount, displayGems, leaderboardPosition, imageSrc }) => {
    return (
        <div className="flex flex-row justify-between items-center gap-x-4 mt-4 mx-4 px-11 w-full" >
            <div className="flex flex-row items-center gap-x-4">
                <img src={imageSrc} alt="Tabletop" className="w-19 h-19" />
                <div className="flex flex-col justify-center space-y-0">
                    <div className="flex items-start gap-y-2">
                        <div className="flex items-center gap-x-2">
                            <img src={SmallChip} alt="Chip" className="w-6 h-6" />
                            <span className="text-3xl tabular-nums text-white select-none">{displayCount.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <img src={Diamond} alt="Diamond" className="w-6 h-6" />
                            <span className="text-3xl tabular-nums text-white select-none">{displayGems.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </div>
            <span className="text-4xl tabular-nums text-white select-none">{`${leaderboardPosition}`}</span>
        </div>
    );
};
export default TableTopData;