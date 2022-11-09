import type { GetStaticProps, NextPage } from "next";
import DistortionRow from "../src/components/DistortionRow";
import React from "react";
import { DistortionItem, INIT_DATA } from "../src/constants";

const Home: NextPage = ({ now }: any) => {
  const [data, setData] = React.useState([INIT_DATA]);

  const outputStr = React.useMemo(() => {
    const obj = {
      distortions: data,
    };
    return `"${JSON.stringify(obj).replaceAll('"', '\\"')}"`;
  }, [data]);

  const appendRow = React.useCallback(() => {
    setData((prev) => [...prev, INIT_DATA]);
  }, []);

  const deleteRow = React.useCallback(
    (index: number) => () => {
      setData((prev) => prev.filter((_, i) => i !== index));
    },
    []
  );

  const handleChange = React.useCallback(
    (index: number) => (name: string, value: number | string) => {
      setData((prev) => {
        const newData = [...prev];
        newData[index] = {
          ...newData[index],
          [name]: value,
        };
        return newData;
      });
    },
    []
  );

  return (
    <div>
      <h1>
        Distortion Generator
        <span style={{ fontSize: 12 }}>{new Date(now).toLocaleString()}</span>
      </h1>
      <div style={{ display: "flex", gap: 16, padding: "0 32px" }}>
        row: {data.length}
        <button style={{ marginLeft: 16 }} onClick={appendRow}>
          Add Row
        </button>
      </div>
      <div>
        <textarea style={{ width: "100%", height: 100 }} value={outputStr} />
      </div>
      <div>
        {data.map((row, index) => (
          <DistortionRow
            key={index}
            data={row}
            onDelete={deleteRow(index)}
            onChange={handleChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const now = Date.now();
  return {
    props: {
      now,
    },
  };
};
