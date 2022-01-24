import React, { useState } from "react";
import "./App.css";
import { ResponsiveSankey } from "./nivo-sankey/ResponsiveSankey";
import data from "./data";
import CustomNodeLayer from "./CustomNodeLayer";

function App() {
  const [nodesArr, setNodesArr] = useState(data.nodes);
  const [linksArr, setLinksArr] = useState(data.links);
  
  return (
    <div style={{ height: 300 }}>
      <ResponsiveSankey
        data={{ nodes: nodesArr, links: linksArr }}
        margin={{
          top: 20,
          right: 50,
          bottom: 20,
          left: 50,
        }}
        align="center"
        sort="input"
        isInteractive={true}
        theme={{
          // background: "#333333",
          fontFamily: "Sans-serif",
        }}
        nodeThickness={180}
        nodeOpacity={1}
        nodeInnerPadding={0}
        nodeSpacing={30}
        nodeBorderWidth={2}
        nodeBorderRadius={5}
        colors={(node) => node.color}
        linkOpacity={0.5}
        linkHoverOpacity={1}
        linkHoverOthersOpacity={0.2}
        enableLinkGradient={true}
        labelPosition="inside"
        labelOrientation="horizontal"
        // label={(node) => `${node.leftIcon} ${node.id} ${node.rightIcon}`}
        labelTextColor={(node) =>
          node.labelTextColor ? node.labelTextColor : "white"
        }
        animate={true}
        layers={["links", CustomNodeLayer]}
        linkContract={5}
        // layers={[CustomLinkLayer, CustomNodeLayer]}
      />
    </div>
  );
}

export default App;
