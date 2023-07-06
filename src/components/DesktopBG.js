import React from "react"
// import '../styles/desktop-bg.scss'
function DesktopBG() {
  return (
    <svg width="1318" height="800" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="-45.25%" y1="-88.077%" x2="97.789%" y2="100%" id="a">
          <stop stopColor="#FF52C1" offset="0%" />
          <stop stopColor="#F952C5" offset="4.09%" />
          <stop stopColor="#9952FF" stopOpacity="0" offset="100%" />
        </linearGradient>
        <linearGradient x1="-64.06%" y1="-121.906%" x2="97.789%" y2="100%" id="b">
          <stop stopColor="#FF52C1" offset="0%" />
          <stop stopColor="#F952C5" offset="4.09%" />
          <stop stopColor="#9952FF" stopOpacity="0" offset="100%" />
        </linearGradient>
        <linearGradient x1="100%" y1="111.373%" x2="-24.893%" y2="-55.159%" id="c">
          <stop stopColor="#FF52C1" offset="0%" />
          <stop stopColor="#9952FF" offset="100%" />
        </linearGradient>
        <linearGradient x1="21.681%" y1="5.006%" x2="145.861%" y2="145.591%" id="d">
          <stop stopColor="#FF52C1" offset="0%" />
          <stop stopColor="#9952FF" offset="100%" />
        </linearGradient>
        <linearGradient x1="6.375%" y1="-15.195%" x2="91.754%" y2="105.701%" id="e">
          <stop stopColor="#FF52C1" offset="0%" />
          <stop stopColor="#9952FF" offset="100%" />
        </linearGradient>
      </defs>
      <path fill="url(#a)" transform="matrix(-1 0 0 1 834.817 0)" d="M0 0h409.224l425.593 376v156.83z" />
      <path fill="url(#b)" transform="rotate(180 528.65 584)" d="M0 367l641.153.138L1057.3 673.299V801z" />
      <g fill="none" fillRule="evenodd" id="desktop-scene">

        <circle id="circle" stroke="url(#c)" strokeWidth="17" cx="704" cy="563" r="49" />
        <rect id="rect-4" fill="url(#d)" opacity=".558" transform="rotate(45 1107.87 708.87)" x="1088.87" y="689.87" width="38" height="38" rx="3" />
        <rect id="rect-3" fill="url(#d)" opacity=".503" transform="rotate(45 1279.598 103.598)" x="1251.598" y="75.598" width="56" height="56" rx="3" />
        <rect data-depth="0.2" id="rect-2" fill="url(#d)" opacity=".558" transform="rotate(45 934.627 63.627)" x="918.627" y="47.627" width="32" height="32" rx="3" />
        <rect data-depth="0.8" id="rect-1" fill="url(#d)" opacity=".558" transform="rotate(45 703.627 186.627)" x="687.627" y="170.627" width="32" height="32" rx="3" />
        <rect id="rect-5" fill="url(#d)" opacity=".387" transform="rotate(45 1237.02 606.02)" x="1228.521" y="597.521" width="17" height="17" rx="1" />
        <path d="M91.477 739.477v-16.5a5 5 0 0 1 10 0v16.5h16.5a5 5 0 0 1 0 10h-16.5v16.5a5 5 0 1 1-10 0v-16.5h-16.5a5 5 0 1 1 0-10h16.5z" fill="url(#e)" opacity=".211" transform="rotate(45 96.477 744.477)" />
      </g>
    </svg>
  )
}

export default DesktopBG