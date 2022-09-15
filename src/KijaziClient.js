import { useEffect, useState } from "react"

function useKijaziClient(){
    const [pat, setPat] = useState('')
    const url = "https://spabackend254.herokuapp.com/customers/1"
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