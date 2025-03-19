import axios from "axios";

export const handler = async (event) => {
    try {
        const city = event.queryStringParameters?.city || "New York";
        const apiKey = "d036ae18694a737141b5326bdc107f1d"; // Replace with your API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await axios.get(url);
        return {
            statusCode: 200,
            body: JSON.stringify({
                city: response.data.name,
                temperature: response.data.main.temp,
                weather: response.data.weather[0].description,
            }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error fetching weather data", error: error.message }),
        };
    }
};
