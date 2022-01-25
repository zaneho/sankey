import React, { useState } from "react";
import "./App.css";
import CustomNode from "./CustomNode";
import data from "./data";
import { ResponsiveSankey } from "./nivo-sankey/ResponsiveSankey";

function App() {
    const [nodesArr, setNodesArr] = useState(data.nodes);
    const [linksArr, setLinksArr] = useState(data.links);

    const handleClick = (target, e) => {
        console.log("handleClick", target, e);
        const link = target.hasOwnProperty("thickness");
        const remove = false;
        if (!link && remove) {
            //if node click experiment remove
            const newLinkArr = linksArr.filter(
                (link) => link.source !== target.id && link.target !== target.id
            );

            setLinksArr(newLinkArr);
            setNodesArr(nodesArr.filter((node) => node.id !== target.id));
        } else if (!link && !remove) {
            //node select 'glow' by changing opacity
            const newNodesArr = nodesArr.map((node) => {
                if (node.depth === target.depth && node.id !== target.id) {
                    console.log(node);
                    let color = node.color.split(",");
                    color = `${color[0]},${color[1]},${color[2]},0.3)`;
                    node.color = color;
                }
                return node;
            });
            setNodesArr(newNodesArr);
        }

        console.log(nodesArr);
    };

    const addNode = () => {
        setNodesArr([
            ...nodesArr,
            {
                id: document.getElementById("myId").value,
                color: document.getElementById("myColor").value,
                leftIcon: "",
                rightIcon: "",
                labelTextColor: "rgb(255, 255, 255,1)",
            },
        ]);
    };

    const addLink = () => {
        setLinksArr([
            ...linksArr,
            {
                source: document.getElementById("mySource").value,
                target: document.getElementById("myTarget").value,
                value: document.getElementById("myVal").value,
            },
        ]);
    };

    const addNodeWithLink = () => {
        addNode();
        addLink();
    };

    const CustomNodeLayer = ({ nodes }) =>
        nodes.map((node) => {
            // console.log(node);
            return <CustomNode key={node.id} node={node} handleClick={handleClick} />;
        });

    return (
        <>
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
                        background: "#575757",
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
                    labelTextColor={(node) => (node.labelTextColor ? node.labelTextColor : "white")}
                    animate={true}
                    layers={["links", CustomNodeLayer]}
                    // layers={[CustomLinkLayer, CustomNodeLayer]}
                />
            </div>

            <div>
                <input id="myId" type="text" placeholder="id" />
                <input id="myColor" type="text" placeholder="color" />
                <button onClick={addNode}>Add Node</button>
                <br />
                <input id="mySource" type="text" placeholder="source" />
                <input id="myTarget" type="text" placeholder="target" />
                <input id="myVal" type="text" placeholder="value" />
                <button onClick={addLink}>Add Link</button>
                <br />
                <button onClick={addNodeWithLink}>Add Node & Link</button>
            </div>
            <div>
                <ol>
                    <li>border</li>
                    <li>icons, badge</li>
                </ol>
                <ul>
                    <li>animation/opacity of node</li>
                    <li>alignment of link</li>
                    <li>need set up 'invinsible' nodes & link</li>
                    <li>cant make link 'overlap' near node</li>
                </ul>
            </div>
        </>
    );
}

export default App;
