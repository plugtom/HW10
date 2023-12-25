const root = ReactDOM.createRoot(document.querySelector('#root'))
//  const content =(
//     <div>
//         <h1>Today: {(new Date()).toDateString()}</h1>
//     </div>
//  )

function Content() {
  return (
    <div className="con">
      <h1>Sum=0</h1>
      <button className="btnadd">Add Counter</button>
      <div className="content">
        <button>+</button>
        <h2>{0}</h2>
        <button>-</button>
        <button>0</button>
      </div>
    </div>
  );
}

  
  


function App() {
    return (
      <div>
        <h1>Today: {(new Date()).toDateString()}</h1>
      </div>
    );
  }

root.render(<Content />)
