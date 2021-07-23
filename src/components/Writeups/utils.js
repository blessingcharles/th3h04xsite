import axios from 'axios'
import { useEffect, useState } from 'react';
import {BASE_URL} from '../../cofig'
export default function useSearch(query , pageNo){

    let cancel ;
    const searchUrl =BASE_URL + "/api/writeups/search"
    const [results , setResults] = useState([])
    const [hasMore , setHasMore] = useState(false)
    const [isLoading , setIsLoading] = useState(false)
    const [isErr , SetIsErr] = useState(false)

    useEffect(()=>{
        setResults([])
    },[query])

    useEffect(()=>{

        setIsLoading(true)
        SetIsErr(false)

        axios({
            method:"GET",
            url: searchUrl,
            params:{query:query , pageno : pageNo},
            cancelToken: new axios.CancelToken(c => cancel = c )
        }).then((res)=>{

            console.log(res.data)
            setResults(prev => {
                return [...new Set([...prev , ...res.data.docs.map(b => b)])]
            })

            // setHasMore(res.data.docs.length > 0)
            setIsLoading(false)

        }).catch((err)=>{
            if(axios.isCancel(err)) return
            console.log(err)

            SetIsErr(true)
        })

        return ()=> cancel() 

    },[query,pageNo])

    return [results , hasMore , isLoading , isErr] ;
}
