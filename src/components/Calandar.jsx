import { DatePicker, Space } from "antd";
import React from "react";
import { useAPP } from "../utils/context";

const { RangePicker } = DatePicker;
const Calandar = () => {
  const { setStartDate, setEndDate } = useAPP();

  function handleGetDate(e) {
    // console.dir(e);
    const patDate = (datePart) => String(datePart).padStart(2, "0");

    setStartDate(`${e[0].$y}${patDate(e[0].$M + 1)}${patDate(e[0].$D)}`);
    setEndDate(`${e[1].$y}${patDate(e[1].$M + 1)}${patDate(e[1].$D)}`);
  }
  return (
    <div>
      <Space direction="vertical" size={12} style={{ marginBottom: "25px" }}>
        <RangePicker onChange={handleGetDate} />
      </Space>
    </div>
  );
};

export default Calandar;
