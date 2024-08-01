'use client'

import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame,} from '@react-three/fiber'
import { Image, ScrollControls, } from '@react-three/drei'
import { easing } from 'maath'
import '@/utils/utils'
import { useRouter } from 'next/navigation'




async function fetchAnime() {
  const res = await fetch('http://localhost:8081/anime?filters=upcoming&type=TV&limit=8').then(res => res.json())
  return res
}


export default function Carousel  ()  {
  
  const [anime, setAnime] = useState()

  useEffect( ()=> {

    async function getData() {
      const res = await fetchAnime()
      setAnime(res)
    }
    getData()
  }, [])

  return(
  
  <Canvas camera={{ position: [0, 0, 100], fov: 14 }}>
    <ScrollControls pages={4} infinite>
      <Rig rotation={[0, 0, 0.15]}>
        <Crs anime={anime}/>
      </Rig>
    </ScrollControls>
  </Canvas>
)
}

function Rig(props) {
  const ref = useRef()
  useFrame((state, delta) => {
    // ref.current.rotation.y = -scroll.offset * (Math.PI * 2) // Rotate contents
   
    ref.current.rotation.y = delta * 0.5 + ref.current.rotation.y 
    state.events.update() // Raycasts every frame rather than on pointer-move
    easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta) // Move camera
    state.camera.lookAt(0, 0, 0) // Look at center
  })
  return <group ref={ref} {...props} />
}

function Crs({ radius = 1.4, count = 8, anime }) {
  
  
  return Array.from({ length: count }, (_, i) => (
    <Card
      key={i}
      animeid={anime?.data[i].id}
      // url={`/img${Math.floor(i % 10) + 1}_.jpg`}
      url={anime ? anime.data[i].large_image_url : `/img1.jpg`}
      position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
      rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
    />
  ))
}

function Card({ url,animeid, ...props }) {
  
  const router = useRouter()
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const pointerOver = (e) => (e.stopPropagation(), hover(true))
  const pointerOut = () => hover(false)
  useFrame((state, delta) => {
    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta)
    easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta)
    easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.5, 0.2, delta)
  })
  return (
  
    <Image  onClick={()=> router.push(`/anime/${animeid}}`)} ref={ref} url={url} transparent side={THREE.DoubleSide} onPointerOver={pointerOver} onPointerOut={pointerOut} {...props}>
      <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
    </Image>
  )
}
