import { useState } from "react"
import { useNavigate } from "react-router-dom"
export const useGetAllData = () => {
    
    const [data, setData] = useState([])
   
    const fetchData =  async () => {
     const response =  await fetch('http://localhost:5000/books',{method : 'GET'})
     const result =  await response.json()
     setData(result.data)
    }

    return {fetchData, data}
}

export const useDeleteData =  () => {
const navigate = useNavigate()

    const deleteData = async (id) => {
        const confirmDelete = confirm("Are you want to delete this data")
        if (!confirmDelete) return

        try {
            const response = await fetch(`http://localhost:5000/books/${id}`, {
                method : "DELETE"
            })
            const result = await response.json()

            if (result) {
                alert("Product deleted successfully")
                fetchData()
            }
        } catch (error) {
            
        }
    }
    return {deleteData}
}


export const useAddData = () => {
    const navigate = useNavigate()
    const addData = async (data) => {
        
        const response = await fetch('http://localhost:5000/books',{
            method : "POST",
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        })
        const result = response.json();
        if (result) {
            navigate('/')
        }
    }

    return {addData}
}

export const useGetDataById = () => {
    const [data, setData] = useState({})
   const getDataById = async  (id) => {
     const response = await fetch(`http://localhost:5000/books/${id}`, {
        method : 'GET'
    })
    const result = await response.json();
    setData(result.data)
   }
    return {getDataById, data}
}

export const useUpdateData = () => {
    const navigate = useNavigate()
    const updateData = async (data, id) => {
        const response  = await fetch(`http://localhost:5000/books/${id}`, {
            method: 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        const result = await response.json()
        if (result) {
            navigate('/')
        }
    }

    return {updateData}
}