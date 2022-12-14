import { useEffect, useState } from "react"

function useKijazi(){
    const [loc, setLoc, setServer] = useState('')
    const url = "https://spabackend254.herokuapp.com/spaAttendant"
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