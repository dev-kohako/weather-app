import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Weather {
    temperature: Float
    minTemperature: Float
    maxTemperature: Float
    humidity: Int
    description: String
    city: String
    country: String
    thermalSensation: Float
  }

  type Query {
    getWeatherData(cityName: String!, apiKey: String!): Weather
  }
`);

export default schema;
