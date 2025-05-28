// import React from 'react';
// import { Html, useProgress } from '@react-three/drei';

// const CanvasLoader = () => {
//   const { progress } = useProgress();
  
//   return (
//     <Html center>
//       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#f1f1f1', fontWeight: 800 }}>
//         <span className='canvas-loader' />
//         <p style={{ fontSize: 14, marginTop: 40 }}>
//           {progress < 100 ? `Loading... ${Math.round(progress)}%` : 'Loaded!'}
//         </p>
//       </div>
//     </Html>
//   );
// };
// export default React.memo(CanvasLoader); // Prevent unnecessary re-renders

// export default React.memo(CanvasLoader); // Prevent unnecessary re-renders
import React, {useState, useEffect} from 'react';
import { Html, useProgress } from "@react-three/drei";

  
const CanvasLoader = () => {
const { progress, active } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      setDisplayProgress(progress);
    } else if (!active) {
      // When loading is done, hide loader
      setDisplayProgress(100);
    }
  }, [progress, active]);
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
         {displayProgress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default React.memo(CanvasLoader); // Prevent unnecessary re-renders