import React, { useEffect, useState } from 'react'

export default function TestPromise() {

  const [data, setData]: any = useState([])
  const promise = fetch('https://jsonplaceholder.typicode.com/todos/');

  // const FetchData = () => {
  //   return 
  // }
  useEffect(() => {
    promise.then((response) => {
      return response.json();
    }).then((datas) => {
      console.log(datas, "datas");
      setData(datas);
    })
  }, [])
  //console.log(promise);
  return (
    <div>
      {/* {console.log(data)} */}
      {data.map((items: any, index: number) => {
        return (
          <>
            <p>{items.id}</p>
            {items.title}
          </>
        )
      })}
    </div>
  )
}
