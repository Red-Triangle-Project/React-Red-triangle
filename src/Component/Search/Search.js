import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [detailedResults, setDetailedResults] = useState([]);

    useEffect(() => {
        if (query) {
            const fetchData = async () => {
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

            fetchData();
        }
    }, [query]);

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

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
            />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul>
                {detailedResults.map((detail, index) => (
                    <li key={index}>
                        <h3>{detail.title}</h3>
                        <img src={detail.coverPhoto.url} alt="Cover" />
                        <p><strong>Purpose:</strong> {detail.purpose}</p>
                        <p>{detail.description}</p>
                    </li>
                ))}

            </ul>
        </div>
    );
}

export default Search;