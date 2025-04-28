import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyCity = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('https://api.weatherapi.com/v1/current.json?key=4fbe5117f25b407d9b6165157252404&q=Березне&lang=uk');
        setWeatherData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Сталася помилка: {error.message}</p>;
  if (!weatherData) return <p>Дані не знайдено.</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Моє місто: Березне</h1>
      <p><strong>Місто:</strong> {weatherData.location?.name}</p>
      <p><strong>Країна:</strong> {weatherData.location?.country}</p>
      <p><strong>Температура:</strong> {weatherData.current?.temp_c} °C</p>
      <p><strong>Опис погоди:</strong> {weatherData.current?.condition?.text}</p>
      <p><strong>Координати:</strong> {weatherData.location?.lat}, {weatherData.location?.lon}</p>
    </div>
  );
};

export default MyCity;
