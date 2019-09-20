import React, {useState, useEffect} from 'react';

function useWindowMousePosition() {
  let [WindowMousePosition, setWindowMousePosition] = useState({
    x: null,
    y: null
  });

  function handleMouseMove(e) {
    setWindowMousePosition({
      x: e.pageX,
      y: e.pageY
    });
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return WindowMousePosition;
}

function App() {
  //State Hook
  const [count, setCount] = useState(0);
  

  //Effect Hook
  useEffect(()=> {
    document.title=`You clicked ${count} times`;
  },[count]);
  
  let { x, y } = useWindowMousePosition();

  return (
      <div>
        <p>You clicked {count}times</p>
        <button onClick={() => setCount(count+1)}>
          Clickme
        </button>
        <div style={{width : "100%", height : "80%" }}>
          <pre>{JSON.stringify({x,y})}</pre>
        </div>  
      </div>
    );
}

export default App;
