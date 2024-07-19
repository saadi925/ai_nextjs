import { WithChildren } from '@/types/types'
import React from 'react'
import RootLayout from './RootLayout'

export default function RootProvider(props : WithChildren) {

  return (
    <>
      <RootLayout >
        {props.children}
      </RootLayout>
    </>
  )
}
