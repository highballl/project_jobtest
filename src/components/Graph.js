import React from "react";
import { Radar } from "@nivo/radar";
import { VALUES } from "../constants";

function Graph(props) {
  const values = props.values;
  const count = [0, 1, 2, 3, 4, 5, 6, 7];
  const data = count.map((index) => ({
    value: VALUES[index],
    level: values[index],
  }));

  const theme = {
    axis: {
      ticks: {
        text: {
          fill: "rgba(255, 255, 255, 255, .35)",
        },
      },
    },
    grid: {
      line: {
        strokc: "rgba(255, 255, 255, 1)",
        strokeDasharray: "1 1",
      },
    },
    dots: {
      text: {
        fill: "#2d374d",
        fontSize: 12,
        fontWeight: 800,
      },
    },
    tooltip: {
      container: {
        background: "rgba(0,0,0,0.25)",
        color: "inherit",
        boxShadow: "0 3px 9px rgba(0, 0, 0, 0.5)",
        fontFamily: "monospace",
      },
    },
  };

  return (
    <div>
      <Radar
        width={350}
        height={315}
        margin={{ top: 0, right: 60, bottom: 10, left: 60 }}
        data={data}
        indexBy="value"
        keys={["level"]}
        colors={["#00c1af"]}
        theme={theme}
        dotSize={8}
        enableDotLabel={false}
        dotLabelYOffset={4}
        gridShape="linear"
        gridLevels={8}
      />
    </div>
  );
}

export default Graph;