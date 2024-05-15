import { ReactNode } from "react"
import Sidbar from "./Sidbar"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Admin',
  description: '...',
}

const lyaout = ({children}:{children:ReactNode}) => {
  return (
    <div className="fix-height flex gap-6">
      <Sidbar />
      {children}
      </div>
  )
}

export default lyaout