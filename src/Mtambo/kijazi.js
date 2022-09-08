import { useEffect, useState } from "react"

function useKijazi(){
    const [loc, setLoc] = useState('')
    const url = "http://localhost:9292/spaAttendant"
    useEffect(()=>{
      fetch(url)
      .then(res => res.json())
      .then(data => {
        setServer(data)
       
      })
      .catch(err => console.log(err))
    }, [])
    return [loc, setLoc, url]
}

export default useKijazi