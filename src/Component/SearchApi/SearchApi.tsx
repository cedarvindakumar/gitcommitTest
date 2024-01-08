import React, { useState, useEffect } from 'react';



interface Post {
    id: any,
    title: string,

}

function SearchApi() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hasBeenCalled, setHasBeenCalled] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const url = !hasBeenCalled ? 'https://jsonplaceholder.typicode.com/posts' : `https://jsonplaceholder.typicode.com/posts?query='${searchTerm}`;
            // Replace with the actual API endpoint and query parameters
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${searchTerm}`);
            !hasBeenCalled && setHasBeenCalled(true)
            //const data = await response.json();
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSearchResults(data);
        } catch (err: any) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        if (!hasBeenCalled) {
            fetchData();
        }
    }, [])

    useEffect(() => {
        if (searchTerm.length > 0) {
            fetchData();
        } else {
            // Clear search results if the search term is empty
            setHasBeenCalled(false);
            fetchData();
        }


    }, [searchTerm]);


    return (
        <>
            <div className='api-search'>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* <button onClick={fetchData}>Search</button> */}


                {error && <p>Error: {error}</p>}
                {loading ? <p>Loading...</p> :
                    searchResults.length ?
                        <ul>
                            {
                                searchResults.map((item, index) => {
                                    return (
                                        <li key={item.id}>{item.title}</li>
                                    )
                                })
                            }
                        </ul> : 'Data not found'
                }
            </div>
        </>
    )
}

export default SearchApi;