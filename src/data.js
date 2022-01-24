const data={
    nodes: [
      {
        id: "a1",
        color: "rgba(255, 0, 0, 0.3)",
        leftIcon: "◔",
        rightIcon: "",
        labelTextColor: "rgb(255, 255, 255,0.3)",
        height: 50
      },
      {
        id: "b1",
        color: "rgba(255, 0, 0, 0.8)",
        leftIcon: "◔",
        rightIcon: "",
        height: 50
      },
      {
        id: "a2",
        color: "lightcoral",
        leftIcon: "◕",
        rightIcon: "",
        height: 50
      },
      {
        id: "b2",
        color: "grey",
        leftIcon: "",
        rightIcon: ""
      },
      {
        id: "a3",
        color: "rgba(255, 0, 0, 0.3)",
        leftIcon: "",
        rightIcon: "",
        labelTextColor: "rgb(255, 255, 255,0.3)"
      },
      {
        id: "b3",
        color: "red",
        leftIcon: "",
        rightIcon: ""
      },
      {
        id: "b4",
        color: "lightcoral",
        leftIcon: "",
        rightIcon: ""
      },
      {
        id: "c1 long long text",
        color: "blue",
        leftIcon: "",
        rightIcon: "⧖"
      },
      {
        id: "c2",
        color: "grey",
        leftIcon: "",
        rightIcon: ""
      },
      {
        id: "c3 long long long long long long text",
        color: "grey",
        leftIcon: "◔",
        rightIcon: "⧗"
      },
      {
        id: "d1",
        color: "navy",
        leftIcon: "○",
        rightIcon: ""
      },
      {
        id: "d2",
        color: "lightblue",
        leftIcon: "⬤",
        rightIcon: ""
      },
      {
        id: "c4",
        color: "blue",
        leftIcon: "◐",
        rightIcon: ""
      }
    ],
    links: [
      {
        source: "a1",
        target: "b1",
        value: 1
      },
      {
        source: "a2",
        target: "b2",
        value: 1
      },
      {
        source: "a3",
        target: "b2",
        value: 1
      },
      // {
      //   source: "a3",
      //   target: "b3",
      //   value: 1
      // },
      {
        source: "b1",
        target: "c1 long long text",
        value: 1
      },
      {
        source: "b1",
        target: "c3 long long long long long long text",
        value: 1
      },
      {
        source: "b2",
        target: "c3 long long long long long long text",
        value: 1
      },
      {
        source: "c3 long long long long long long text",
        target: "d1",
        value: 1
      },
      {
        source: "c1 long long text",
        target: "d2",
        value: 1
      },
      {
        source: "c4",
        target: "d1",
        value: 1
      },
      {
        source: "b4",
        target: "c1 long long text",
        value: 1
      },
      {
        source: "c2",
        target: "d2",
        value: 1,
        startColor: "rgba(0, 0, 0, 0.5)",
        endColor: "rgba(0, 0, 0, 0.5)"
      },
      {
        source: "a1",
        target: "b3",
        value: 1,
        startColor: "rgba(0, 0, 0, 0)",
        endColor: "rgba(0, 0, 0,0)"
      }
    ]
  };
export default data  