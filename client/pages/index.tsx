import { useEffect, useState } from "react";

function index() {
  const [message, setMessage] = useState("Loading");
  useEffect(()=>{
    fetch("http://127.0.0.1:8080/").then((response)=> response.headers)
    .then((data) => {
      setMessage(data.message);
    })
  },[])
  return (
    <div>{message}</div>
  )
}

export default index