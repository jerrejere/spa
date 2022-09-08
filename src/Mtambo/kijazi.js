import { useEffect, useState } from "react"

function useKijazi(){
    const [server, setServer] = useState('')
    const url = "http://localhost:9292/doctors"
    useEffect(()=>{
      fetch(url)
      .then(res => res.json())
      .then(data => {
        setServer(data)
        // console.log(data)
      })
      .catch(err => console.log(err))
    }, [])
    return [server, setServer, url]
}

export default useKijazi