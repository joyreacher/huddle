import * as React from "react"
import { useEffect } from "react"
import Parallax from "parallax-js"
import DesktopBG from "../components/DesktopBG"
import Header from "../components/Header"
export default function Home() {
  useEffect(() => {
    let mainScene = document.getElementById('scene');
    let desktopSVGScene = document.getElementById('desktop-scene');
    let mainParallaxInstance = new Parallax(mainScene)
    mainParallaxInstance.friction(0.01, .02);
    let desktopParallaxInstance = new Parallax(desktopSVGScene);
    desktopParallaxInstance.friction(0.009, 0.03);
  }, [])

  return (
    <main id="scene" style={{
      backgroundImage:`url('fullscreen.svg')`,
      backgroundRepeat:'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: '-1em center'
    }}>
      <Header />
    </main>
  )
}

