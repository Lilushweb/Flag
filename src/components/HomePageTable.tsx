import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useFlagGetAllQuery } from "../server/flagGetApi";
import { Country } from "../type/flagGetApiType";
import { useNavigate } from "react-router-dom";
import { IsLoading } from "./IsLoading";

export const HomePageTable: React.FC = () => {
  const { data, error, isLoading } = useFlagGetAllQuery();
  const naviget = useNavigate();
  const handleClickNaviget = (name: string) => {
    naviget(`/name/${name}`);
  };
  if (isLoading) {
    return <IsLoading />;
  }
  data && console.log(data);
  if (error) return <div>Error</div>;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Capital</TableCell>
            <TableCell>Region</TableCell>
            <TableCell>Flag</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((element: Country) => (
              <TableRow
                key={element.cca2}
                onClick={() => handleClickNaviget(element.name.common)}
              >
                <TableCell>{element.name.common}</TableCell>
                <TableCell>
                  {element.capital && element.capital.length > 0
                    ? element.capital[0]
                    : "N/A"}{" "}
                </TableCell>
                <TableCell>{element.region}</TableCell>
                <TableCell>
                  <img
                    src={element.flags.png}
                    alt={`${element.name.common} flag`}
                    width="50"
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
