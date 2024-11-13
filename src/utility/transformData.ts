interface InputData {
  Country: string;
  Year: string;
  "Crop Name": string;
  "Crop Production (UOM:t(Tonnes))": string | number;
  "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": string | number;
  "Area Under Cultivation (UOM:Ha(Hectares))": string | number;
}

interface OutputData {
  country: string;
  year: string;
  cropName: string;
  cropProduction: number;
  yieldOfCrops: number;
  areaUnderCultivation: number;
}

export const transformData = (input: InputData[]): OutputData[] => {
  return input.map((data) => {
    const year = data.Year.split(",").pop()?.trim().slice(-4) || "";

    return {
      country: data.Country,
      year: year, // Extracting year part if the year is in "Financial Year (Apr - Mar)" format
      cropName: data["Crop Name"],
      cropProduction:
        data["Crop Production (UOM:t(Tonnes))"] === ""
          ? 0
          : Number(data["Crop Production (UOM:t(Tonnes))"]),
      yieldOfCrops:
        data["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] === ""
          ? 0
          : Number(data["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]),
      areaUnderCultivation:
        data["Area Under Cultivation (UOM:Ha(Hectares))"] === ""
          ? 0
          : Number(data["Area Under Cultivation (UOM:Ha(Hectares))"]),
    };
  });
};
