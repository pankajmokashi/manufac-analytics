import { CropData, YearlyCropProduction, CropAverages } from "./type";

export function getMaxMinCropProduction(
  crops: CropData[]
): YearlyCropProduction[] {
  const results: YearlyCropProduction[] = [];
  const groupedByYear: { [year: string]: CropData[] } = {};

  // Group crops by year
  for (const crop of crops) {
    if (!groupedByYear[crop.year]) {
      groupedByYear[crop.year] = [];
    }
    groupedByYear[crop.year].push(crop);
  }
  // console.log(groupedByYear);

  // Process each year's data
  for (const year in groupedByYear) {
    const cropsInYear = groupedByYear[year];

    if (cropsInYear.length === 0) {
      results.push({
        Year: year,
        maxProduction: [],
        minProduction: [],
      });
      continue;
    }

    let maxCropProduction = -Infinity;
    let minCropProduction = Infinity;
    const maxCrops: string[] = [];
    const minCrops: string[] = [];

    for (const crop of cropsInYear) {
      const cropProduction = crop.cropProduction || 0;

      // Max Production Logic
      if (cropProduction > maxCropProduction) {
        maxCropProduction = cropProduction;
        maxCrops.length = 0; // Reset maxCrops
        maxCrops.push(crop.cropName);
      } else if (cropProduction === maxCropProduction) {
        maxCrops.push(crop.cropName);
      }

      // Min Production Logic
      if (cropProduction < minCropProduction) {
        minCropProduction = cropProduction;
        minCrops.length = 0; // Reset minCrops
        minCrops.push(crop.cropName);
      } else if (cropProduction === minCropProduction) {
        minCrops.push(crop.cropName);
      }
    }

    results.push({
      Year: year,
      maxProduction: maxCrops,
      minProduction: minCrops,
    });
  }

  return results;
}

export function getAverageCropData(crops: CropData[]): CropAverages[] {
  const result: CropAverages[] = [];
  const groupedByCrop: {
    [cropName: string]: {
      totalYield: number;
      totalArea: number;
      count: number;
    };
  } = {};

  // Group crops by cropName and calculate totals
  for (const crop of crops) {
    const { cropName, yieldOfCrops, areaUnderCultivation } = crop;
    const yieldValue = yieldOfCrops || 0; // Defaults to 0 if undefined
    const areaValue = areaUnderCultivation || 0; // Defaults to 0 if undefined

    if (!groupedByCrop[cropName]) {
      groupedByCrop[cropName] = { totalYield: 0, totalArea: 0, count: 0 };
    }

    groupedByCrop[cropName].totalYield += yieldValue;
    groupedByCrop[cropName].totalArea += areaValue;
    groupedByCrop[cropName].count++;
  }

  console.log(groupedByCrop);

  // Calculate averages after grouping
  for (const cropName in groupedByCrop) {
    const { totalYield, totalArea, count } = groupedByCrop[cropName];

    const averageYield = count > 0 ? totalYield / count : 0;
    const averageArea = count > 0 ? totalArea / count : 0;

    result.push({
      crop: cropName,
      averageYield: parseFloat(averageYield.toFixed(3)),
      averageCultivation: parseFloat(averageArea.toFixed(3)),
    });
  }

  return result;
}
