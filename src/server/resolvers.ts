import axios from "axios";

export const root = {
  getWeatherData: async ({ apiKey, cityName }: { apiKey: string; cityName: string }) => {
    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=pt`;
      const response = await axios.get(apiUrl);
      const data = response.data;

      return {
        temperature: data.main.temp,
        minTemperature: data.main.temp_min,
        maxTemperature:data.main.temp_max,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        city: data.name,
        country: data.sys.country,
        thermalSensation: data.main.feels_like,
      };
    } catch (error) {
      console.error("Erro ao buscar dados do clima:", error);
      throw new Error("Falha ao buscar os dados do clima");
    }
  },
};
