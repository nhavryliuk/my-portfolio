import axios from 'axios';

const API_KEY = '4fbe5117f25b407d9b6165157252404';

export const fetchWeather = async (city = 'Berezne') => {
  try {
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=uk`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні погоди:', error);
    return null;  // Повертаємо null у разі помилки
  }
};
