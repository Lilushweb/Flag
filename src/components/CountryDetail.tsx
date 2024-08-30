import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFlagGetInfoQuery } from "../server/flagGetApi";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { IsLoading } from "./IsLoading";
export const CountryDetail = () => {
  const { name } = useParams<{ name: string }>();
  const { data, isLoading, error } = useFlagGetInfoQuery(name);
  const countryData = data && data[0];
  const navigate = useNavigate();
  const handleClickBack = () => {
    navigate("/");
  };
  data && console.log(data);
  if (isLoading) return <IsLoading />;
  if (error) return <div>Error</div>;

  return (
    <>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "800px",
        }}
      >
        {countryData ? (
          <>
            <Button
              sx={{ position: "absolute", left: "20px", top: "20px" }}
              variant="contained"
              onClick={() => handleClickBack()}
            >
              Back
            </Button>
            <CardMedia
              component="img"
              image={countryData.flags.png}
              sx={{ width: "400px", height: "250px" }}
              title={countryData.flags.alt}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {countryData.name.common}
              </Typography>
              <Typography variant="body1">
                {`Capital: ${countryData.capital[0]}`}
              </Typography>
              <Typography variant="body1">
                {`Region: ${countryData.region}`}
              </Typography>
              <Typography variant="body1">
                {`Status: ${countryData.status}`}
              </Typography>
              <Typography variant="body1">
                {`Timezones: ${countryData.timezones.join(", ")}`}
              </Typography>
              <Typography variant="body1">
                {`Population: ${countryData.population}`}
              </Typography>
              <Typography variant="body1">
                {`Area: ${countryData.area} km²`}
              </Typography>
              <Typography variant="body1">
                {`Languages: ${Object.values(countryData.languages).join(", ")}`}
              </Typography>
              <Typography variant="body1">
                {`Currencies: ${Object.entries(countryData.currencies)
                  .map(([code, { name }]) => `${name} (${code})`)
                  .join(", ")}`}
              </Typography>
            </CardContent>
          </>
        ) : null}
      </Card>
    </>
  );
};
