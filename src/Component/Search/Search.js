import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import millify from 'millify'; 
import './Search.css';

function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [detailedResults, setDetailedResults] = useState([]);
    const [initialResults, setInitialResults] = useState([]);
    const [initialDetailedResults, setInitialDetailedResults] = useState([]);

    const stripHTML = (html, expanded) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        let textContent = doc.body.textContent || "";

        // If not expanded, limit the text to 50 characters
        if (!expanded) {
            textContent = textContent.substring(0, 50) + "...";
        }

        return textContent;
    };

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
                setInitialResults(response.data.hits);
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
            setResults(response.data.hits);
        } catch (error) {
            setError('An error occurred while fetching data');
        }
        setLoading(false);
    };

    useEffect(() => {
        const fetchDetails = async () => {
            const externalIDs = results.map(result => result.externalID).join(',');
            try {
                const saleResponse = await axios.get('http://localhost:3001/properties/list', {
                    params: {
                        locationExternalIDs: externalIDs,
                        purpose: 'for-sale',
                        hitsPerPage: 3
                    }
                });

                const rentResponse = await axios.get('http://localhost:3001/properties/list', {
                    params: {
                        locationExternalIDs: externalIDs,
                        purpose: 'for-rent',
                        hitsPerPage: 3
                    }
                });

                if (Array.isArray(saleResponse.data.hits) && Array.isArray(rentResponse.data.hits)) {
                    const saleDetailedResultsPromises = saleResponse.data.hits.map(async (property) => {
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

                    const rentDetailedResultsPromises = rentResponse.data.hits.map(async (property) => {
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

                    const saleDetailedResults = await Promise.all(saleDetailedResultsPromises);
                    const rentDetailedResults = await Promise.all(rentDetailedResultsPromises);

                    setDetailedResults([...saleDetailedResults.filter(result => result !== null), ...rentDetailedResults.filter(result => result !== null)]);
                } else {
                    console.error('Invalid response format for property list:', saleResponse.data, rentResponse.data);
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

    const toggleDescription = (index) => {
        setDetailedResults(prevResults => 
            prevResults.map((result, i) => 
                i === index ? { ...result, expanded: !result.expanded } : result
            )
        );
    };

    const toggleButtonText = (expanded) => {
        return expanded ? 'See less' : 'Go to details ';
    };

    return (
        <div className="search-container">
            <div className="search-input-container">
                <input 
                    className="search-input" 
                    type="text" 
                    value={query} 
                    onChange={handleInputChange} 
                    placeholder="Search..." 
                />
                <button className="search-button" onClick={handleSearch}>Search</button>
            </div>
            {loading && <p className="loading-message">Loading...</p>}
            {error && <p className="error-message">{error}</p>}
            <ul className="results-list">
                {(detailedResults.length > 0 ? detailedResults : initialDetailedResults).map((detail, index) => (
                    <li className="result-item" key={index}>
                        <Link to={`/property/${detail.externalID}`}>
                            <h3 className='banana'>{stripHTML(detail.title)}</h3>
                            <img className='banana' src={detail.coverPhoto.url} alt="Cover" />
                            <div className="result-item-content">
                                <p className='banana'><strong className='banana'>City:</strong> {detail.location.map(loc => loc.name).join(', ')}</p>
                                <p className='banana'><strong className='banana'>Purpose:</strong> {detail.purpose}</p>
                                <p className='banana'><strong className='banana'>Type:</strong> {detail.category[0].name}</p>
                                <p className='banana'><strong className='banana'>Price:</strong> {millify(detail.price)}</p>
                                <p className={`result-item-description ${detail.expanded ? 'expanded' : ''}`} ><strong className='banana'>Description:</strong> {stripHTML(detail.description, detail.expanded)}</p>
                                
                                <button className="toggle-btn" onClick={() => toggleDescription(index)}>
                                    {toggleButtonText(detail.expanded)}
                                </button>
                            </div>
                        </Link>
                    </li>

                ))}
            </ul>
        </div>
    );
}

export default Search;