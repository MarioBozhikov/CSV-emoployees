import { parse } from "papaparse";
import {Dispatch, SetStateAction} from "react";

import userDuoData from "../types/userDuoData";

  export interface parseCSVDataProps {
    files: FileList | null;
    setUserDuo: Dispatch<SetStateAction<userDuoData[]>>;
  }
  // Parsing date types
  function parseDate(dateString: string | null): boolean | Date {
    const date = dateString ? new Date(dateString) : new Date();
    return isNaN(date.getTime()) ? false : date;
  }
  // Checking for a date time object
  const isDate = (date: any): boolean => {
    return date instanceof Date;
  };
  // Calculate days of users that have worked together
  function calcMutualDays(firstEmployee: Date[], secondEmployee: Date[]): number {
    const firstDate: Date = new Date(firstEmployee[0] > secondEmployee[0] ? firstEmployee[0] : secondEmployee[0]);
    const secondDate: Date = new Date(firstEmployee[1] < secondEmployee[1] ? firstEmployee[1] : secondEmployee[1]);
    return Math.round((secondDate.getTime() - firstDate.getTime()) / 86400000);
  }
  // Parses CSV data and returns an array of objects with the following structure
  export function parseCSVData({ files, setUserDuo }: parseCSVDataProps): void {
    let targetFile = files;
    if (!targetFile?.length) return;
    let data: string[] = [];
    parse(targetFile[0], {
      encoding: "utf-8",
      complete: (results: any) => {
        data = results.data;
        for (let i = 0; i < data.length; i++) {
          const dateFrom: any = parseDate(data[i][2].toUpperCase() === "NULL" ? null : data[i][2]) || null;
          const dateTo: any = parseDate(data[i][3].toUpperCase() === "NULL" ? null : data[i][3]) || null;
          if (!dateFrom || !dateTo) continue;
          for (let j = i; j < data.length; j++) {
            const secondsDateFrom: any = parseDate(data[j][2].toUpperCase() === "NULL" ? null : data[j][2]) || null;
            const secondDateTo: any = parseDate(data[j][3].toUpperCase() === "NULL" ? null : data[j][3]) || null;
            for (let date of [dateFrom, dateTo, secondsDateFrom, secondDateTo]) if (!isDate(date)) continue;
            if (
              data[i][0] === data[j][0] ||
              data[i][1] !== data[j][1] ||
              dateFrom.getTime() > secondDateTo.getTime() ||
              dateTo.getTime() < secondsDateFrom.getTime()
            )
              continue;
            setUserDuo((prev) =>
              [
                ...prev,
                {
                  firstEmployee: data[i][0],
                  secondEmployee: data[j][0],
                  projectId: data[i][1],
                  mutualDays: calcMutualDays([dateFrom, dateTo], [secondsDateFrom, secondDateTo]),
                },
              ].sort((a, b) => b.mutualDays - a.mutualDays)
            );
          }
        }
      },
    });
  }


