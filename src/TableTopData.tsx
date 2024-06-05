import React from 'react';

interface TableTopDataProps {
    displayCount: number;
    displayGems: number;
    leaderboardPosition: number | null;
    imageSrc: string;
}

const TableTopData: React.FC<TableTopDataProps> = ({ displayCount, displayGems, leaderboardPosition, imageSrc }) => {
    return (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center space-y-4">
            <img src={imageSrc} alt="Tabletop" className="w-32 h-32" />
            <span className="text-4xl tabular-nums text-white select-none">{displayCount.toLocaleString()}</span>
            <span className="text-4xl tabular-nums text-white select-none">{displayGems.toLocaleString()}</span>
            <span className="text-4xl tabular-nums text-white select-none">{`Leaderboard Position: ${leaderboardPosition}`}</span>
        </div>
    );
};

export default TableTopData;