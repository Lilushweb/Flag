import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Country, CountryDetail } from "../type/flagGetApiType";

const flagGetApi = createApi({
  reducerPath: "flagGetApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restcountries.com/v3.1",
  }),
  endpoints: (build) => ({
    flagGetAll: build.query<Country[], void>({
      query: () => ({
        url: "/all",
        method: "GET",
      }),
    }),
    flagGetInfo: build.query<CountryDetail[], string | undefined>({
      query: (nameFlag: string | undefined) => ({
        url: `/name/${nameFlag}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useFlagGetAllQuery, useFlagGetInfoQuery } = flagGetApi;
export default flagGetApi;
