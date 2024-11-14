import { Box, Table, Title } from "@mantine/core";
import { CropAverages } from "../../utility/type";
import TableReviews from "./Table";
import classes from "./Table.module.css";

const CropAveragesTable = ({ data }: { data: CropAverages[] }) => {

  // columns for Crop Averages Table
  const columns = [
    "Crop",
    "Average Yield of the Crop between 1950-2020 ",
    "Average Cultivation Area of the Crop between 1950-2020",
  ];

  const renderRow = (row: CropAverages) => (
    <>
      <Table.Td>{row.crop}</Table.Td>
      <Table.Td>{row.averageYield}</Table.Td>
      <Table.Td>{row.averageCultivation}</Table.Td>
    </>
  );

  return (
    <Box className={classes.section}>
      <Title className={classes.title}>
        Crop Averages Table :
      </Title>
      <TableReviews data={data} columns={columns} renderRow={renderRow} />
    </Box>
  );
};

export default CropAveragesTable;
