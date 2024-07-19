import AppHeader from '@/components/Header/Header'
import { WithChildren } from '@/types/types'
import React from 'react'

export default function RootLayout(props : WithChildren) {
  return (
    <div>
      <AppHeader />
      {props.children}
    </div>
  )
}
