import cx from "clsx";
import { useState } from "react";
import { Table, ScrollArea } from "@mantine/core";
import classes from "./Table.module.css";

interface TableProps<T> {
  data: T[];
  columns: string[];
  renderRow: (row: T) => React.ReactNode;
}

function TableReviews<T>({ data, columns, renderRow }: TableProps<T>) {
  const [scrolled, setScrolled] = useState(false);

  return (
    <ScrollArea
      h={300}
      maw={900}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      className={classes.tableDiv}
    >
      <Table miw={400} maw={900}>
        <Table.Thead
          className={cx(classes.header, { [classes.scrolled]: scrolled })}
        >
          <Table.Tr>
            {columns.map((col) => (
              <Table.Th key={col}>{col}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((row, index) => (
            <Table.Tr key={index}>{renderRow(row)}</Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
}

export default TableReviews;
