import { ReactNode } from "react"

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Product Lists',
  description: '...',
}
 


  const Productlyaout = ({children}:{children:ReactNode}) => {
  return (
    <div className="fix-height">
      {children}
    </div>
  )
}

export default  Productlyaout

