const Spinner = () => {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: '0 auto', background: 'rgb(255, 255, 255)', display: 'block', shapeRendering: 'auto', width: "250px", height: "250px" }} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
         <circle cx="41" cy="50" fill="#000000" r="9">
            <animate attributeName="cx" repeatCount="indefinite" dur="1.1235955056179776s" keyTimes="0;0.5;1" values="41;59;41" begin="-0.5617977528089888s"></animate>
         </circle>
         <circle cx="59" cy="50" fill="#ff0000" r="9">
            <animate attributeName="cx" repeatCount="indefinite" dur="1.1235955056179776s" keyTimes="0;0.5;1" values="41;59;41" begin="0s"></animate>
         </circle>
         <circle cx="41" cy="50" fill="#000000" r="9">
            <animate attributeName="cx" repeatCount="indefinite" dur="1.1235955056179776s" keyTimes="0;0.5;1" values="41;59;41" begin="-0.5617977528089888s"></animate>
            <animate attributeName="fill-opacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1" dur="1.1235955056179776s" repeatCount="indefinite"></animate>
         </circle>
      </svg>
   )
}

export default Spinner