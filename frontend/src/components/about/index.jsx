import React from 'react'
import { Banner } from '../common'

export default function AboutIndex() {
  return (
    <div>
        <div className="w-100 flex column gap-2">
            <Banner title={"About Us"} step1={'Home'} step2={'About Us'}/>
        </div>
    </div>
  )
}
