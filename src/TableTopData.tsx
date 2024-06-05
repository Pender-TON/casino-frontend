import React from 'react';
import { ReactComponent as SmallChip } from './assets/small-chip.svg';
interface TableTopDataProps {
    displayCount: number;
    displayGems: number;
    leaderboardPosition: number | null;
    imageSrc: string;
}

const TableTopData: React.FC<TableTopDataProps> = ({ displayCount, displayGems, leaderboardPosition, imageSrc }) => {
    return (
        <div className="flex flex-row justify-between items-center gap-x-4 mt-4 mx-4 px-15 w-full" >
            <div className="flex flex-row items-center gap-x-4">
                <img src={imageSrc} alt="Tabletop" className="w-19 h-19" />
                <div className="flex flex-col items-center justify-center space-y-0">
                    <div className="flex items-center gap-x-2">
                        <SmallChip />
                        <span className="text-3xl tabular-nums text-white select-none">{displayCount.toLocaleString()}</span>
                    </div>
                    <span className="text-3xl tabular-nums text-white select-none">{displayGems.toLocaleString()}</span>
                </div>
            </div>
            <span className="text-4xl tabular-nums text-white select-none">{`${leaderboardPosition}`}</span>
        </div>
    );
};
export default TableTopData;