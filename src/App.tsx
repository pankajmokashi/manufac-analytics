import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Header from "./components/Header/Header";
import data from "./assets/Manufac-India-Agro-Dataset.json";
import { transformData } from "./utility/transformData";
import {
  getAverageCropData,
  getMaxMinCropProduction,
} from "./utility/filterData";
import YearlyCropProductionTable from "./components/Table/YearlyCropProductionTable";
import CropAveragesTable from "./components/Table/CropAveragesTable";

export default function App() {
  // edit dataset keys
  const transformedData = transformData(data);

  // get data for Crop Production Table
  const maxMinCropProductionData = getMaxMinCropProduction(transformedData);

  // get data for Crop Averages Table
  const averageCropData = getAverageCropData(transformedData);

  return (
    <MantineProvider theme={theme}>
      <Header />
      <YearlyCropProductionTable data={maxMinCropProductionData} />
      <CropAveragesTable data={averageCropData} />
    </MantineProvider>
  );
}
