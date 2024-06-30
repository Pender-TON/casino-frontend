import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import WebApp from '@twa-dev/sdk'
import { motion } from 'framer-motion'
import { ArrowLeftFromLine } from 'lucide-react'

import { TonWalletButton } from '@components/settings-section/ton-wallet-button'
import { BalanceBoard } from '@components/table-header/balance-board'
import { PrimaryButton } from '@components/ui/primary-button'
import { useTonWallet } from '@tonconnect/ui-react'
import { CheckWalletConnectButton } from './check-wallet-connect-button'

export const UpgradesPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    WebApp.BackButton.show()
    WebApp.onEvent('backButtonClicked', () => navigate('/'))
  }, [navigate])

  const wallet = useTonWallet()

  return (
    <motion.div
      className="flex h-full w-full select-none flex-col items-center justify-start gap-5 px-5 pt-3"
      transition={{ type: 'tween', ease: 'easeInOut', duration: 0.2 }}
      animate={{
        x: '0%',
        opacity: 1
      }}
      exit={{
        x: '100%',
        opacity: 0.5
      }}
      initial={{
        x: '100%'
      }}
    >
      <BalanceBoard />
      <div className="flex w-full flex-col gap-4 rounded-3xl border border-white border-opacity-[0.12] bg-white bg-opacity-[0.08] p-5 pt-4 text-white">
        <div className="flex w-full flex-col items-start gap-2">
          <p className="text-xl font-semibold leading-[21.6px]">Double Prizes</p>
          <p className="text-base font-medium leading-[17.92px]">
            {wallet
              ? "You've already linked your TON wallet and get double the prizes"
              : 'Increase x2 your winnings by connecting your TON wallet'}
          </p>
        </div>

        <TonWalletButton className="w-fit self-end" />
      </div>

      <CheckWalletConnectButton />

      <Link className="self-end" to={'/'}>
        <PrimaryButton>
          <ArrowLeftFromLine className="h-8 w-8" />
        </PrimaryButton>
      </Link>
    </motion.div>
  )
}
