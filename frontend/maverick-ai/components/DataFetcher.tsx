"use client";

import React, { useEffect, useState } from 'react';

const DataFetcher: React.FC = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/api/data');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Fetched Data</h1>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DataFetcher;