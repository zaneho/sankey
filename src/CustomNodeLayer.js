

const CustomNode = ({ node }) => (
    <>
      <g transform={`translate(${node.x0}, ${node.y0})`}>
        <foreignObject width={node.width} height={50}>
          <div
            style={{
              // width: node.width,
              // height: 50,
              boxSizing: "border-box",
              color: "white",
              textAlign: "center",
              padding: "9px",
              fontSize: "12px",
              backgroundColor: node.color,
              borderRadius: "5px",
              border: setBorderColor(node)
            }}
            onClick={(e) => {
              console.log("on click", e, node);
            //   handleClick(node, e);
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              console.log("right-clicked", e, node);
            }}
            onMouseEnter={(e) => {
              console.log("mouse enter", e, node);
            }}
          >
            {/* {node.leftIcon}  */}
            {node.id} 
            {/* {node.rightIcon} */}
          </div>
        </foreignObject>

        {setLeftIcon(node)}
        {setRightIcon(node)}
        {setBadge(node)}
        {/* <foreignObject width={node.width} height={30} >
        <div style={{height:30, width:100, backgroundColor:"white", border:"1px solid black"}}>
          tooltip
          </div>
        </foreignObject> */}
      </g>
    </>
  );

  const CustomNodeLayer = ({ nodes }) =>
    nodes.map((node) => {
      // console.log(node);
      return <CustomNode key={node.id} node={node} />;
    });

    const setBorderColor = (node) => {
      if (["a2", "b1", "c3 long long long long text"].includes(node.id))
        return "1.5px solid yellow";
    };
  
    const setBadge = (node) => {
      if (["a2", "b3"].includes(node.id))
        return (
          <g
            transform={`translate(140, 40) scale(0.00800000,-0.00800000)`}
            fill="darkblue"
            stroke="none"
          >
            <path
              d="M83 5113 c-28 -5 -70 -47 -75 -76 -2 -12 -1 -36 4 -52 11 -45 4943
  -4975 4978 -4976 49 -2 65 3 95 32 l30 29 3 1383 c2 760 0 1402 -3 1427 -6 44
  -26 65 -1093 1133 -863 863 -1094 1089 -1122 1097 -34 10 -2769 12 -2817 3z
  m2411 -427 c43 -18 66 -51 66 -96 0 -28 -105 -576 -135 -710 -4 -17 54 34 192
  171 109 108 208 202 220 208 42 21 83 13 119 -23 28 -28 34 -41 34 -77 l0 -43
  -337 -339 c-186 -186 -350 -345 -365 -353 -15 -8 -37 -14 -50 -14 -36 0 -83
  34 -98 71 -13 30 -8 60 55 378 38 190 71 355 73 366 3 11 -87 -71 -200 -182
  -192 -190 -207 -203 -242 -203 -63 0 -111 37 -117 90 -6 56 3 66 339 403 294
  296 370 365 405 367 4 0 23 -6 41 -14z m749 -747 c31 -16 356 -339 373 -371
  24 -46 18 -86 -20 -124 -28 -28 -42 -34 -76 -34 -41 0 -47 5 -181 137 l-140
  137 -81 -82 -82 -81 82 -84 c78 -81 82 -87 82 -130 0 -37 -5 -51 -31 -76 -25
  -26 -39 -31 -76 -31 -43 0 -49 4 -130 82 l-84 82 -82 -82 -81 -82 131 -132
  c78 -79 134 -144 138 -161 20 -78 -54 -152 -132 -132 -38 9 -389 360 -398 398
  -4 15 -4 39 0 55 7 29 634 668 690 703 34 21 66 24 98 8z m531 -533 c18 -8 41
  -24 50 -37 35 -51 24 -83 -139 -409 -85 -171 -152 -310 -148 -310 4 0 96 30
  206 66 215 71 236 73 281 28 45 -45 43 -66 -28 -281 -36 -110 -66 -202 -66
  -206 0 -4 140 63 311 148 233 117 319 155 347 155 94 0 141 -108 78 -179 -11
  -13 -218 -122 -458 -242 -469 -235 -487 -241 -541 -199 -14 11 -31 36 -37 55
  -10 31 -5 54 64 261 41 126 74 229 73 231 -2 1 -105 -32 -231 -73 -207 -69
  -230 -74 -261 -64 -19 6 -44 23 -55 37 -42 54 -35 71 199 540 120 241 227 446
  237 455 18 16 59 36 77 37 4 1 23 -5 41 -13z"
            />
          </g>
        );
    };
  
    const setLeftIcon = (node) => {
      if (["a1", "a2", "b1", "b2", "c2"].includes(node.id))
        return (
          <g
            transform="translate(10,30) scale(0.00500000,-0.00500000)"
            fill="white"
            stroke="none"
          >
            <path
              d="M2234 5104 c-355 -43 -684 -155 -993 -339 -114 -68 -141 -94 -141
  -137 0 -39 20 -63 63 -73 23 -6 46 4 136 59 333 203 697 320 1094 351 l87 7 0
  -224 0 -224 -142 -17 c-926 -111 -1636 -834 -1729 -1762 -14 -146 -7 -392 16
  -525 108 -614 508 -1134 1090 -1416 484 -235 1008 -267 1500 -94 154 55 395
  182 415 220 17 32 11 70 -15 95 -33 34 -59 31 -130 -11 -525 -317 -1135 -343
  -1695 -73 -596 287 -982 839 -1029 1471 -75 1004 668 1869 1672 1948 451 36
  899 -103 1248 -386 80 -65 228 -218 290 -299 170 -222 295 -497 357 -785 24
  -115 26 -144 26 -355 0 -202 -3 -243 -23 -335 -72 -334 -216 -612 -442 -854
  -74 -80 -89 -101 -89 -128 0 -39 7 -51 37 -67 46 -24 67 -14 149 72 243 251
  423 594 493 942 17 88 41 265 41 310 0 13 29 15 220 15 184 0 222 -2 226 -15
  3 -8 1 -72 -6 -142 -38 -428 -198 -841 -466 -1203 -91 -123 -354 -390 -469
  -477 -357 -268 -697 -413 -1140 -484 -106 -17 -512 -18 -630 -1 -424 60 -793
  208 -1116 448 -509 379 -847 932 -960 1569 -30 170 -37 494 -15 665 70 529
  298 1005 662 1381 100 103 114 121 114 151 0 46 -31 78 -74 78 -29 0 -47 -13
  -131 -97 -402 -403 -645 -900 -721 -1473 -22 -174 -15 -553 15 -726 98 -572
  353 -1061 757 -1454 198 -192 389 -329 624 -446 277 -137 574 -222 894 -255
  187 -18 517 -7 698 24 540 95 1002 336 1374 718 198 204 343 409 468 660 122
  245 209 516 252 784 25 157 30 531 9 696 -72 572 -316 1066 -737 1490 -406
  409 -918 654 -1513 724 -158 18 -467 18 -621 -1z m638 -160 c178 -42 468 -179
  673 -315 74 -50 135 -92 135 -95 0 -2 -48 20 -107 49 -189 95 -379 160 -570
  197 -143 28 -176 27 -202 -6 -26 -33 -27 -65 -3 -94 15 -18 47 -28 163 -52
  432 -87 799 -287 1105 -600 289 -296 479 -654 543 -1023 16 -94 41 -310 41
  -357 0 -5 -29 -8 -64 -8 l-63 0 -7 86 c-56 683 -478 1297 -1100 1599 -219 106
  -464 175 -683 191 l-93 7 0 223 0 224 88 -6 c48 -3 113 -12 144 -20z"
            />
            <path
              d="M1553 3210 c-139 -29 -274 -175 -277 -298 -1 -52 27 -82 78 -82 39 0
  68 29 86 83 15 46 61 102 104 124 18 9 55 16 87 16 109 0 189 -74 197 -183 4
  -51 0 -67 -31 -132 -34 -70 -185 -289 -385 -556 -51 -68 -95 -134 -98 -148 -8
  -32 12 -79 39 -92 35 -17 218 -23 443 -16 182 6 209 9 226 26 24 24 23 79 -1
  109 l-19 24 -233 -4 c-195 -2 -231 -1 -222 10 133 168 357 494 398 580 83 176
  62 325 -64 442 -91 85 -214 121 -328 97z"
            />
            <path
              d="M2330 3170 c-11 -11 -20 -23 -20 -27 0 -5 -20 -127 -45 -271 -46
  -275 -46 -300 -6 -321 29 -16 61 -13 127 10 209 73 407 -41 407 -236 0 -143
  -112 -254 -256 -255 -135 0 -237 91 -257 231 -5 33 -16 70 -26 80 -24 27 -88
  25 -115 -2 -19 -19 -21 -30 -17 -94 9 -144 100 -274 236 -338 63 -30 73 -32
  182 -32 107 0 119 2 175 29 259 127 321 472 121 672 -93 93 -240 143 -373 127
  -29 -3 -53 -2 -53 3 0 5 10 71 22 146 l22 137 192 3 c172 3 194 5 213 22 28
  26 29 88 1 116 -19 19 -33 20 -265 20 -232 0 -246 -1 -265 -20z"
            />
            <path
              d="M3165 3171 c-99 -46 -151 -163 -125 -285 27 -130 143 -206 267 -175
  60 16 133 85 151 145 15 51 16 143 1 181 -46 124 -182 186 -294 134z m125
  -163 c35 -38 24 -115 -20 -138 -61 -33 -105 85 -53 143 22 23 48 22 73 -5z"
            />
            <path
              d="M3683 3168 c-29 -33 -486 -1126 -487 -1165 0 -45 28 -73 74 -73 20 0
  44 6 53 13 10 6 125 270 258 585 256 610 256 612 206 647 -32 22 -80 19 -104
  -7z"
            />
            <path
              d="M3670 2394 c-81 -35 -121 -103 -128 -214 -3 -68 -1 -80 25 -130 50
  -94 139 -136 248 -116 44 9 109 65 136 119 61 119 15 283 -94 336 -52 25 -136
  27 -187 5z m116 -152 c37 -24 43 -87 13 -126 -41 -52 -99 -20 -99 54 0 61 46
  99 86 72z"
            />
          </g>
        );
    };
  
    const setRightIcon = (node) => {
      if (["a1", "a2", "b1", "b2", "c2"].includes(node.id))
        return (
          <g
            transform={`translate(140, 8) scale(0.7,0.7)`}
            fill="white"
            stroke="none"
          >
            <path
              d="M20.842,6.723V5.775H9.553v0.947c0,0,1.717,4.781,4.939,6.988v2.297c0,0-3.554,3.459-4.939,7.434v1.084h11.288v-1.084
          c-1.801-4.389-4.939-7.434-4.939-7.434V13.71C20.284,9.945,20.842,6.723,20.842,6.723z"
            />
            <path
              d="M24.91,4.963V3.256h1.619V0H3.864v3.256h1.621v1.707c0,2.607,4.677,9.725,4.896,10.238
          c-0.215,0.514-4.896,7.633-4.896,10.229v1.705H3.864v3.258h22.665v-3.258H24.91V25.43c0-2.607-4.679-9.68-4.929-10.234
          C20.231,14.643,24.91,7.568,24.91,4.963z M23.293,25.43v1.705H7.103V25.43c0-1.873,4.96-9.295,4.96-10.234s-4.96-8.359-4.96-10.232
          V3.256h16.189v1.707c0,1.873-5.002,9.293-5.002,10.232S23.293,23.557,23.293,25.43z"
            />
          </g>
        );
    };
  

    
    

    export default CustomNodeLayer