'use client'
import React from 'react'
import { store } from './store.js'
import { Provider } from 'react-redux'



export default function ProviderApp({children}) {
  return (
    <Provider store={store}>
   {children}
  </Provider>
  )
}
