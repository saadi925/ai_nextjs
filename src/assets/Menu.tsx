import React from 'react'

export function MenuIcon({size = 35, color="#fff", lines="#000"}) {
  return (
    <svg width={35} height={35} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" clipRule="evenodd" viewBox="0 0 64 64" id="menu"><g><rect width="64" height="64" fill="none"></rect><circle cx="32" cy="32" r="26" fill={color}></circle><path fill={lines} d="M180,754L204,754C205.104,754 206,753.104 206,752C206,750.896 205.104,750 204,750L180,750C178.896,750 178,750.896 178,752C178,753.104 178.896,754 180,754Z" transform="translate(-160 -720)"></path><path fill={lines} d="M180,754L204,754C205.104,754 206,753.104 206,752C206,750.896 205.104,750 204,750L180,750C178.896,750 178,750.896 178,752C178,753.104 178.896,754 180,754Z" transform="translate(-160 -730)"></path><path fill={lines} d="M180,754L204,754C205.104,754 206,753.104 206,752C206,750.896 205.104,750 204,750L180,750C178.896,750 178,750.896 178,752C178,753.104 178.896,754 180,754Z" transform="translate(-160 -710)"></path></g></svg>
  )
}

export function DotsMenuIcon({size = 35, color="#fff", dots="#000"}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} fill={color} height={size} id="menu"><path fill="none" d="M0 0h48v48H0z"></path><path d="M24 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg>
  )
}

