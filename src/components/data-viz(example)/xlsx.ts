import xlsx, { IJsonSheet } from "json-as-xlsx";
import { data } from "./data[mock]";

export const downloadXlsx = () => {
  const columns: IJsonSheet[] = [
    {
      sheet: "Sheet 1",
      columns: [
        {
          label: "Date",
          value: (row) => new Date(row.date).toLocaleDateString(),
        },
        { label: "Control No", value: "control_number" },
        { label: "First name", value: "first_name" },
        { label: "Last name", value: "last_name" },
        { label: "Gender", value: "gender" },
        {
          label: "Birth Date",
          value: (row) => new Date(row.birth_date).toLocaleDateString(),
        },
        { label: "Age", value: "age" },
        { label: "Address", value: "address" },
        { label: "Status", value: "status" },
      ],
      content: data,
    },
  ];

  const settings = {
    fileName: "Sample Data",
  };

  xlsx(columns, settings);
};
