import { ChipButton } from './chip-button';

export const Tabletop = () => {
  return (
    <div className="relative flex h-full w-full select-none flex-col items-center justify-between rounded-[20px] border-2 border-table-top-line">
      <div className="absolute left-0 top-0 h-9 w-[75px] rounded-br-[20px] border-b-2 border-r-2 border-table-top-line" />
      <div className="absolute right-0 top-0 h-9 w-[75px] rounded-bl-[20px] border-b-2 border-l-2 border-table-top-line" />

      <div className="flex h-full w-full items-center justify-center">
        <ChipButton />
      </div>

      <div className="w-full shrink-0">
        <div className="h-16 w-full border-t-2 border-table-top-line">
          {/* TODO: Upgrades button */}
        </div>

        <div className="grid h-16 w-full grid-cols-3 divide-x-2 divide-table-top-line border-t-2 border-table-top-line">
          {/* TODO: Mini-games buttons */}
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};
