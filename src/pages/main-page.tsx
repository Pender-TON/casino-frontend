import { motion } from 'framer-motion'

import { Tabletop } from '@components/tabletop'
import { TableHeader } from '@components/table-header'
import { useEffect } from 'react'
import WebApp from '@twa-dev/sdk'

export const MainPage = () => {
  useEffect(() => {
    WebApp.BackButton.hide()
  }, [])

  return (
    <motion.div
      className="flex h-full w-full flex-col"
      transition={{ type: 'tween', ease: 'easeInOut', duration: 0.2 }}
      animate={{
        x: '0%',
        opacity: 1
      }}
      exit={{
        x: '-100%',
        opacity: 0.5
      }}
      initial={{
        x: '-100%'
      }}
    >
      <TableHeader />

      <div className="relative flex h-full w-full overflow-x-hidden">
        <div className="flex h-full w-full shrink-0 select-none flex-col text-white">
          <div className="bg-green-top relative flex h-full w-full flex-col overflow-hidden pb-8">
            <div className="relative flex h-10 w-full shrink-0">
              <div className="table-top-left-corner" />
              <div className="table-top-right-corner" />
              <div className="mx-5 h-full w-full rounded-[40px] rounded-b-none border-4 border-b-0 border-table-desk-accent"></div>
            </div>

            <div className="flex h-full w-full justify-between">
              <div className="flex w-6 shrink-0 flex-col">
                <div className="h-full w-full border-r-4 border-table-desk-accent bg-table-desk-bg" />
                <div className="h-10 w-full rounded-br-[40px] border-b-4 border-r-4 border-table-desk-accent bg-table-desk-bg" />
              </div>

              <div className="flex w-6 shrink-0 flex-col">
                <div className="h-full w-full border-l-4 border-table-desk-accent bg-table-desk-bg" />
                <div className="h-10 w-full rounded-bl-[40px] border-b-4 border-l-4 border-table-desk-accent bg-table-desk-bg" />
              </div>
            </div>

            <div className="absolute flex h-full w-full px-12 pb-9 pt-7">
              <Tabletop />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
