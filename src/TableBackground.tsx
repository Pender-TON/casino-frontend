import { ReactNode } from 'react';

export const TableBackground = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <div className="flex h-full w-full flex-col text-white">
      <div className="bg-[#3D2823] p-4 ">
        Header goes here
      </div>

      <div className="bg-green-top flex h-full w-full flex-col">
        <div className="relative flex h-10 w-full shrink-0">
          <div className="table-top-left-corner" />
          <div className="table-top-right-corner" />
          <div className="mx-5 h-full w-full rounded-[40px] rounded-b-none border-4 border-b-0 border-[#713E2B]"></div>
        </div>
        <div className="flex h-full w-full justify-between">
          <div className="flex w-6 shrink-0 flex-col">
            <div className="h-full w-full border-r-4 border-[#713E2B] bg-[#3D2823]" />
            <div className="h-10 w-full rounded-br-[40px] border-b-4 border-r-4 border-[#713E2B] bg-[#3D2823]" />
          </div>

          Everything else goes here

          <div className="flex w-6 shrink-0 flex-col">
            <div className="h-full w-full border-l-4 border-[#713E2B] bg-[#3D2823]" />
            <div className="h-10 w-full rounded-bl-[40px] border-b-4 border-l-4 border-[#713E2B] bg-[#3D2823]" />
          </div>
        </div>
      </div>

      {/* <div className="absolute h-full w-full pb-6">
        <img className="h-1/2 w-full" src={tableTop} />
        <img className="h-1/2 w-full" src={tableBottom} />
      </div>
      <div className="isolate w-full h-full">{children}</div> */}
    </div>
  );
};
