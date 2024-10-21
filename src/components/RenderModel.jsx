import React, { Suspense } from 'react'
import clsx from 'clsx'
import {Canvas } from '@react-three/fiber'

const RenderModel = ({children, className}) =>{
    return (
        <Canvas
        className={clsx("w-screeen h-screwn relative", className)}>
            <Suspense fallback={null}>
            {children}
            </Suspense>
        </Canvas>
    )
}

export default RenderModel