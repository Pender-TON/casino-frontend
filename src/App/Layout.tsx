import { useState } from 'react'
import { motion, type Transition, type Variant } from 'framer-motion'

import { Tabletop } from '@components/tabletop'
import TableHeader from '@components/table-header'
import { SettingSection } from '@components/settings-section'

const mainLayoutVariants: Record<string, Variant> = {
  default: {
    translateX: 0
  },
  settings: {
    translateX: '-50%'
  }
}

const transitionSettings: Transition = {
  type: 'spring',
  bounce: 0.5,
  duration: 0.5
}

const settingsLayoutVariants: Record<string, Variant> = {
  default: {
    translateX: 0
  },
  settings: {
    translateX: '-100%'
  }
}

export const Layout = () => {
  const [layout, setLayout] = useState<'default' | 'settings'>('default')

  const toggleSettings = () => {
    if (layout === 'default') setLayout('settings')

    if (layout === 'settings') setLayout('default')
  }

  return (
    <div className="flex h-full w-full flex-col">
      <div className="w-full bg-table-desk-bg p-4">
        <TableHeader onClickSettings={toggleSettings} />
      </div>

      <div className="relative flex h-full w-full overflow-x-hidden">
        <motion.div
          animate={layout}
          className="flex h-full w-full shrink-0 select-none flex-col text-white"
          transition={transitionSettings}
          variants={mainLayoutVariants}
        >
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
        </motion.div>

        <motion.div
          animate={layout}
          className="isolate flex w-1/2 shrink-0 flex-col"
          transition={transitionSettings}
          variants={settingsLayoutVariants}
        >
          <div className="-z-1 absolute h-full w-full bg-table-top-surface-dark bg-[url('src/assets/green-texture.svg')] bg-blend-multiply"></div>
          <div className="absolute h-full w-full pb-8">
            <div className="flex h-full w-full items-start justify-center border-b-4 border-table-desk-accent bg-table-desk-bg p-4">
              <SettingSection toggleSettings={toggleSettings} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
