import { useContext } from 'react'
import { RadioOptionContext } from '../contexts/RadioOptionContext'

export function Details({ children }) {
  const isSelected = useContext(RadioOptionContext)
  return isSelected ? children : null
}
