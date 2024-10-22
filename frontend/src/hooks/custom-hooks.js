import { useState } from "react"

export const useGetAllData = () => {
    
    const [data, setData] = useState([])
    const getData = () => {

        // fetchData()
    }
    const fetchData =  async () => {
     const response =  await fetch('http://localhost:5000/books',{method : 'GET'})
     const result =  await response.json()
     setData(result.data)
    }

    return {fetchData, data}
}