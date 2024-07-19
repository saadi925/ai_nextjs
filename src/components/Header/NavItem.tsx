import React from 'react'
interface NavItemType {
  href : string
  title : string
  sublinks? : {
    href : string 
    title : string
  }
}
export default function NavItem({item } :{item : NavItemType}) {
  return (
    <li>
      
    </li>
  )
}
