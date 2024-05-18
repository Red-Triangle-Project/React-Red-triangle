// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Search() {
//     const [query, setQuery] = useState('');
//     const [results, setResults] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [detailedResults, setDetailedResults] = useState([]);

//     useEffect(() => {
//         if (query) {
//             const fetchData = async () => {
//                 setLoading(true);
//                 try {
//                     const response = await axios.get('http://localhost:3001/auto-complete', {
//                         params: {
//                             query,
//                             hitsPerPage: 3,
//                             page: 1,
//                             lang: 'en'
//                         }
//                     });
//                     setResults(response.data.hits); // Adjust based on your response structure
//                 } catch (error) {
//                     setError('An error occurred while fetching data');
//                 }
//                 setLoading(false);
//             };

//             fetchData();
//         }
//     }, [query]);

//     useEffect(() => {
//         const fetchDetails = async () => {
//             const externalIDs = results.map(result => result.externalID).join(',');
//             try {
//                 const listResponse = await axios.get('http://localhost:3001/properties/list', {
//                     params: {
//                         locationExternalIDs: externalIDs,
//                         purpose: 'for-sale', // or 'rent', adjust as needed
//                         hitsPerPage: 3 // or any other value you want
//                     }
//                 });
//                 if (Array.isArray(listResponse.data.hits)) {
//                     const detailedResultsPromises = listResponse.data.hits.map(async (property) => {
//                         try {
//                             const response = await axios.get('http://localhost:3001/properties/detail', {
//                                 params: { externalID: property.externalID }
//                             });
//                             return response.data;
//                         } catch (error) {
//                             console.error('Error fetching property details:', error);
//                             return null;
//                         }
//                     });
//                     const detailedResults = await Promise.all(detailedResultsPromises);
//                     setDetailedResults(detailedResults.filter(result => result !== null));
//                 } else {
//                     console.error('Invalid response format for property list:', listResponse.data);
//                 }
//             } catch (error) {
//                 console.error('Error fetching property list:', error);
//             }
//         };

//         if (results.length > 0) {
//             fetchDetails();
//         }
//     }, [results]);

//     const handleInputChange = (e) => {
//         setQuery(e.target.value);
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 value={query}
//                 onChange={handleInputChange}
//                 placeholder="Search..."
//             />
//             {loading && <p>Loading...</p>}
//             {error && <p>{error}</p>}
//             <ul>
//                 {detailedResults.map((detail, index) => (
//                     <li key={index}>
//                         <h3>{detail.title}</h3>
//                         <img src={detail.coverPhoto.url} alt="Cover" />
//                         <p><strong>Purpose:</strong> {detail.purpose}</p>
//                         <p>{detail.description}</p>
//                     </li>
//                 ))}

//             </ul>
//         </div>
//     );
// }

// export default Search;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [detailedResults, setDetailedResults] = useState([]);
    const [initialResults, setInitialResults] = useState([]);
    const [initialDetailedResults, setInitialDetailedResults] = useState([]);

    // Function to strip HTML tags from a string
    const stripHTML = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };

    // Fetch random data on initial load
    useEffect(() => {
        const fetchInitialData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:3001/properties/list', {
                    params: {
                        locationExternalIDs: '5002',
                        purpose: 'for-sale',
                        hitsPerPage: 6,
                    },
                });
                setInitialResults(response.data.hits); // Adjust based on your response structure
                const initialIDs = response.data.hits.map(hit => hit.externalID);
                fetchInitialDetails(initialIDs);
            } catch (error) {
                setError('An error occurred while fetching initial data');
            }
            setLoading(false);
        };

        const fetchInitialDetails = async (ids) => {
            try {
                const detailPromises = ids.map(async (id) => {
                    try {
                        const response = await axios.get('http://localhost:3001/properties/detail', {
                            params: { externalID: id }
                        });
                        return response.data;
                    } catch (error) {
                        console.error('Error fetching property details:', error);
                        return null;
                    }
                });
                const details = await Promise.all(detailPromises);
                setInitialDetailedResults(details.filter(result => result !== null));
            } catch (error) {
                console.error('Error fetching initial property details:', error);
            }
        };

        fetchInitialData();
    }, []);

    // Fetch search results
    const fetchSearchResults = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3001/auto-complete', {
                params: {
                    query,
                    hitsPerPage: 3,
                    page: 1,
                    lang: 'en'
                }
            });
            setResults(response.data.hits); // Adjust based on your response structure
        } catch (error) {
            setError('An error occurred while fetching data');
        }
        setLoading(false);
    };

    // Fetch detailed results based on search results
    useEffect(() => {
        const fetchDetails = async () => {
            const externalIDs = results.map(result => result.externalID).join(',');
            try {
                const listResponse = await axios.get('http://localhost:3001/properties/list', {
                    params: {
                        locationExternalIDs: externalIDs,
                        purpose: 'for-sale', // or 'rent', adjust as needed
                        hitsPerPage: 3 // or any other value you want
                    }
                });
                if (Array.isArray(listResponse.data.hits)) {
                    const detailedResultsPromises = listResponse.data.hits.map(async (property) => {
                        try {
                            const response = await axios.get('http://localhost:3001/properties/detail', {
                                params: { externalID: property.externalID }
                            });
                            return response.data;
                        } catch (error) {
                            console.error('Error fetching property details:', error);
                            return null;
                        }
                    });
                    const detailedResults = await Promise.all(detailedResultsPromises);
                    setDetailedResults(detailedResults.filter(result => result !== null));
                } else {
                    console.error('Invalid response format for property list:', listResponse.data);
                }
            } catch (error) {
                console.error('Error fetching property list:', error);
            }
        };

        if (results.length > 0) {
            fetchDetails();
        }
    }, [results]);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        if (query) {
            fetchSearchResults();
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
            />
            <button onClick={handleSearch}>Search</button>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul>
                {(detailedResults.length > 0 ? detailedResults : initialDetailedResults).map((detail, index) => (
                    <li key={index}>
                        <h3>{stripHTML(detail.title)}</h3>
                        <img src={detail.coverPhoto.url} alt="Cover" />
                        <p><strong>Purpose:</strong> {detail.purpose}</p>
                        <p>{stripHTML(detail.description)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Search;
