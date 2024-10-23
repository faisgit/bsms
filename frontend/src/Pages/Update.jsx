import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetDataById } from '../hooks/custom-hooks'

function Update() {
  const {id} = useParams()
  const {getDataById, data} = useGetDataById()
  
  getDataById(id)
  return (
    <div>Update</div>
  )
}

export default Update