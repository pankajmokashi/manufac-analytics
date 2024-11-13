export type CropData = {
  country: string;
  year: string;
  cropName: string;
  cropProduction: number;
  yieldOfCrops: number;
  areaUnderCultivation: number;
};

export type YearlyCropProduction = {
  Year: string;
  maxProduction: string[];
  minProduction: string[];
};

export type CropAverages = {
  crop: string;
  averageYield: number;
  averageCultivation: number;
};
