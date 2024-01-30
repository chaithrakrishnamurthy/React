import React from 'react'
import { useParams,useHistory, useLocation } from 'react-router-dom'

const TDetails = () => {
  // const history = useHistory();
  function useQuery(){
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  console.log(query);
  const params = useParams();
  // console.log(params);
  // console.log(history);
  return (
    <div><h1>TDetails{params.id} - {query.get("price")}</h1></div>
  )
}

export default TDetails