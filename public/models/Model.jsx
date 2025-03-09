import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/model.gltf')
  console.log(nodes, materials);
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.object_1.geometry} material={nodes.object_1.material} />
      <mesh geometry={nodes.object_2.geometry} material={nodes.object_2.material} />
      <mesh geometry={nodes.object_3.geometry} material={nodes.object_3.material} />
      <mesh geometry={nodes.object_4.geometry} material={nodes.object_4.material} />
      <mesh geometry={nodes.object_5.geometry} material={nodes.object_5.material} />
      <mesh geometry={nodes.object_6.geometry} material={nodes.object_6.material} />
      <mesh geometry={nodes.object_7.geometry} material={nodes.object_7.material} />
      <mesh geometry={nodes.object_8.geometry} material={nodes.object_8.material} />
      <mesh geometry={nodes.object_9.geometry} material={nodes.object_9.material} />
      <mesh geometry={nodes.object_10.geometry} material={nodes.object_10.material} />
      <mesh geometry={nodes.object_11.geometry} material={nodes.object_11.material} />
      <mesh geometry={nodes.object_12.geometry} material={nodes.object_12.material} />
      <mesh geometry={nodes.Emerald.geometry} material={nodes.Emerald.material} />
      <mesh geometry={nodes.object_13.geometry} material={nodes.object_13.material} />
      <mesh geometry={nodes.object_14.geometry} material={nodes.object_14.material} />
      <mesh geometry={nodes.object_15.geometry} material={nodes.object_15.material} />
      <mesh geometry={nodes.object_16.geometry} material={nodes.object_16.material} />
      <mesh geometry={nodes.object_17.geometry} material={nodes.object_17.material} />
    </group>
  )
}

useGLTF.preload('/models/model.gltf')
