import { useEffect, useState } from "react"

function useKijaziClient(){
    const [pat, setPat] = useState('')
    const url = "http://localhost:9292/customers"
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
          setPat(data)
      
        })
        .catch(err => console.log(err))
      }, [])
    return [pat, setPat, url]
}

export default useKijaziClient