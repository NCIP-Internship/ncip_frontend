import DataTable from "@/components/data-viz/data-table[reuse]"
import { useEffect, useState } from "react"
import DemoColumn from "./demo_folder/column"

const DemoApi = () => {
  const [data, setData] = useState<COC[]>([])

  useEffect(() => {


    (async () => {

      const res = await fetch("http://localhost:8000/api/coc", {
        method: "GET"
      })


      setData((await res.json()).data)

    })()



  }, [])

  return (
    <DataTable data={data} columns={DemoColumn} />
  )
}


export default DemoApi
