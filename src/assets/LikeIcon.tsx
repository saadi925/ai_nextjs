import React from 'react'

export default function LikeIcon({
    size =32, fill= 'red'
}) { 
  return (
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fill} id="heart" x="0" y="0" version="1.1" viewBox="0 0 29 29" xmlSpace="preserve"><path d="m14.854 6.083-.354.353-.354-.354a6.5 6.5 0 0 0-9.192 9.192l.354.354L14.5 24.82l9.192-9.192.354-.354a6.5 6.5 0 0 0-9.192-9.191z"></path><path d="m14.854 6.083-.354.353-.354-.354a6.5 6.5 0 0 0-9.192 9.192l.354.354L14.5 24.82l9.192-9.192.354-.354a6.5 6.5 0 0 0-9.192-9.191z"></path></svg>
  )
}

export function FilledHeart({
  size =22, fill="white"
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width={size} height={size} id="heart"><path fill={fill} d="M5.301 3.002c-.889-.047-1.759.247-2.404.893-1.29 1.292-1.175 3.49.26 4.926l.515.515L8.332 14l4.659-4.664.515-.515c1.435-1.437 1.55-3.634.26-4.926-1.29-1.292-3.483-1.175-4.918.262l-.516.517-.517-.517C7.098 3.438 6.19 3.049 5.3 3.002z"></path></svg>
  )
}


export function CommentIcon({
  size =16 , fill = 'white'
}) {
  return (
    <svg width={size} height={size} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="comment"><path d="M18,2H6A3,3,0,0,0,3,5V16a3,3,0,0,0,3,3H8.59l2.7,2.71A1,1,0,0,0,12,22a1,1,0,0,0,.65-.24L15.87,19H18a3,3,0,0,0,3-3V5A3,3,0,0,0,18,2Zm1,14a1,1,0,0,1-1,1H15.5a1,1,0,0,0-.65.24l-2.8,2.4L9.71,17.29A1,1,0,0,0,9,17H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4H18a1,1,0,0,1,1,1Z"></path></svg>
  )
}
