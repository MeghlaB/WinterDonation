import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Details() {
    const data = useLoaderData()
    console.log(data)
  return (
    <div>
      heloooooo
    </div>
  )
}
