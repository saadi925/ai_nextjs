import React from 'react'

export default function LeftControl({size =32 , color = "black"}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"  width={size} fill={color} height={size} viewBox="0 0 24 24" id="left-arrow"><path d="M11.29,12l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L9.17,11.29a1,1,0,0,0,0,1.42L13.41,17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41Z"></path></svg>
  )
}
