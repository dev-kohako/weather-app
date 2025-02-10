import { gql } from '@apollo/client';

export const GET_WEATHER_DATA = gql`
  query GetWeatherData($cityName: String!, $apiKey: String!) {
    getWeatherData(cityName: $cityName, apiKey: $apiKey) {
      temperature
      minTemperature
      maxTemperature
      humidity
      description
      city
      country
      thermalSensation
    }
  }
`;
