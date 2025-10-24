import './App.css'

function App() {
  return (
    <div className="container">
      <div className="matrix-bg"></div>
      <div className="content">
        <h1 className="glitch" data-text="Gabriel is the hacker master">
          Gabriel is the hacker master
        </h1>
        <div className="terminal">
          <p><span className="prompt">root@hacker:~$</span> whoami</p>
          <p className="output">gabriel_the_master</p>
          <p><span className="prompt">root@hacker:~$</span> skill_level</p>
          <p className="output">MAXIMUM 🔥</p>
        </div>
      </div>
    </div>
  )
}

export default App