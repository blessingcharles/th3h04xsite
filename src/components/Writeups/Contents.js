import React, { useRef, useState ,useCallback} from 'react'
import Cards from './Cards';
import SearchBar from './SearchBar';
import useSearch   from './utils'

export default function Contents() {

    const [query , setQuery] = useState("")
    const [pageNumber , setPageNumber] = useState(1)

    function searchHandler(e){

        setQuery(e.target.value)
        setPageNumber(1)

    }

    const [results , hasMore , isLoading , isErr ] = useSearch(query , pageNumber)

    const observer = useRef()
    const lastElementRef = useCallback(
        (node) => {
            if(isLoading) return
            if(observer.current) observer.current.disconnect()

            observer.current = new IntersectionObserver(entries =>{
                if(entries[0].isIntersecting && hasMore){
                    setPageNumber(prev => prev+1)
                }
            })

            if(node) observer.current.observe(node)
        },
        [isLoading , hasMore],
    )

    return (
        <div >
            {/* searchbar  */}

                <SearchBar 
                    searchHandler={searchHandler}
                />

            {/* searchresults  */}
            <div className="container p-5">
                {results.map((results,index) =>{

                    let href = "/writeups/"+results.title

                    // console.log(title)
                    if(results.length === index+1){
                        
                        return <Cards 
                            title={results.title}
                            description={results.description}
                            lastElementRef={lastElementRef}
                            key={results._id}
                            imgsrc={results.image}
                            linkHref={href}

                        />
                        // return <h1 key={title} ref={lastElementRef}>{title}</h1>

                    }
                    else {

                        return <Cards 
                        title={results.title}
                        description={results.description}
                        key={results._id}
                        imgsrc={results.image}
                        linkHref={href}
                    />

                    // return <h1 key={title}>{title}</h1>

                    }
                })}

                <div>{isLoading && 'Loading ...'}</div>
                <div>{isErr && 'Err...'}</div>


                </div>
        </div>
    )
}
