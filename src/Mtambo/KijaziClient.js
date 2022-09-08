import { useEffect, useState } from "react"

function useKijaziClient(){
    const [cus, setCus] = useState('')
    const url = ""
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
          setCus(data)
      
        })
        .catch(err => console.log(err))
      }, [])
    return [cus, setCus, url]
}

export default useKijaziClient