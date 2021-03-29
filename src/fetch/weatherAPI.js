import axios from "axios";
import React, {useState, useEffect} from "react";

const useWeather = () => {
    const [data, setData] = useState([])

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/history',
            params: {
                startDateTime: '2019-01-01T00:00:00',
                aggregateHours: '24',
                location: 'Washington,DC,USA',
                endDateTime: '2019-01-03T00:00:00',
                unitGroup: 'us',
                dayStartTime: '8:00:00',
                contentType: 'csv',
                dayEndTime: '17:00:00',
                shortColumnNames: '0'
            },
            headers: {
                'x-rapidapi-key': 'a6facfe607mshb142bcff69050c3p1fed6fjsnf93e640458d6',
                'x-rapidapi-host': 'visual-crossing-weather.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setData(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return data;
}

export default useWeather();