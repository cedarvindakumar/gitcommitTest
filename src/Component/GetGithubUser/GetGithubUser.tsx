import React, { useEffect, useState } from 'react'
import './userItem.css';

interface Post {
    id: any,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: any,
    email: any,
    phone: any,
    username: string,
    birthDate: string,
    image: string
}
export default function GetGithubUser() {
    const [spinner, setSpinner] = useState(true);
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [maindate, setMaindata] = useState<Post[]>([]);
    const userLink = "https://dummyjson.com/users";
    const getUser = async () => {
        try {
            const response = await fetch(userLink);

            const data = await response.json();
            setMaindata(data.users);
            //console.log(data);
            setSpinner(false)
        } catch (error) {
            console.log(error)
            setSpinner(false)
        }
    }
    useEffect(() => {
        getUser();
    }, [])

    const filteredData = maindate.filter((item) => {
        const searchWithNmae = item.firstName.toLowerCase().includes(searchTerm.toLowerCase());
        const searchWithId = item.id.toString().includes(searchTerm);
        return searchWithNmae || searchWithId;
    });

    // on handle button
    //Search on hit search button
    // const handleSearch = () => {
    //     const filteredData = maindate.filter((item) => {
    //         const searchWithNmae = item.firstName.toLowerCase().includes(searchTerm.toLowerCase());
    //         const searchWithId = item.id.toString().includes(searchTerm);
    //         return searchWithNmae || searchWithId;
    //     });
    //     setMaindata(filteredData)
    // }







    return (
        <div className='userListing'>
            <h3>Github user</h3>
            <div className='userListing-wrapper'>
                <div className='search-wrapper'>
                    <input placeholder='Search user' type='text' value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
                </div>
                <>
                    {filteredData.length ? <>
                        {filteredData?.map((item, index) => {
                            return (
                                <div className='userItem'>
                                    <div className='details--wrapper'>
                                        <div className='image-wrapper'>
                                            <img src={item.image} />
                                        </div>
                                        <div className='userDetails'>
                                            <div className='detail-item'>
                                                <label>Id:</label>
                                                {item.id}
                                            </div>
                                            <div className='detail-item'>
                                                <label>Name:</label>
                                                {item.firstName} {item.maidenName} {item.lastName}
                                            </div>
                                            <div className='detail-item'>
                                                <label>Age:</label>
                                                {item.age}
                                            </div>
                                            <div className='detail-item'>
                                                <label>Gender:</label>
                                                {item.gender}
                                            </div>
                                            <div className='detail-item'>
                                                <label>Date of birth:</label>
                                                {item.birthDate}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='email-details'>
                                        <span className='email'>
                                            {item.email}

                                        </span>
                                        <span className='email'>
                                            {item.phone}

                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </> : <p>No data found</p>}
                </>

            </div>
        </div>
    )
}
