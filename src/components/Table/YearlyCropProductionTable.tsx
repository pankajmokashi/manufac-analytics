import { Box, Table, Title } from "@mantine/core";
import { YearlyCropProduction } from "../../utility/type";
import TableReviews from "./Table";
import classes from "./Table.module.css";

const YearlyCropProductionTable = ({
  data,
}: {
  data: YearlyCropProduction[];
}) => {
  // columns for Crop Production Table
  const columns = [
    "Year",
    "Crop with Maximum Production in that Year",
    "Crop with Minimum Production in that Year",
  ];

  const renderRow = (row: YearlyCropProduction) => (
    <>
      <Table.Td>{row.Year}</Table.Td>
      <Table.Td>{row.maxProduction.join(", ")}</Table.Td>
      <Table.Td>{row.minProduction.join(", ")}</Table.Td>
    </>
  );

  return (
    <Box className={classes.section}>
      <Title className={classes.title}>
        Crop Production Table :
      </Title>
      <TableReviews data={data} columns={columns} renderRow={renderRow} />
    </Box>
  );
};

export default YearlyCropProductionTable;
