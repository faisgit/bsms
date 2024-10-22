import React, { useEffect } from 'react'
import { useGetAllData } from '../hooks/custom-hooks'
import Table from '../components/Home/Table'
function Home() {
  const {fetchData, data}  = useGetAllData()
  useEffect(() =>{
    fetchData()
  },[])
 
  // data.map((e) => console.log(e))
  // console.log(data)
  return (
    <div>
      <Table data={data} />
    </div>
  )
}

export default Home