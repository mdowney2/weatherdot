import React, { useState , useEffect } from 'react';

export const TimeComponent = () => {
    let [date, setDate] = useState(new Date());
    useEffect(() => {
        let timer = setInterval(() => setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    });
    return (
        <p>it's currently {date.toLocaleTimeString()}.</p>
    )
}