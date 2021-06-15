
function App() {
  return (
    <div className="Hello">
      <br/>
      <h1>Hello World</h1>
      <label htmlFor="name"> User Name: </label>
      <input type="text" id="fName" placeholder="RajaSekhar" defaultValue="Raja"/><br/><br/ >
      <label htmlFor="user_password"> Password: </label>
      <input type="text" id="user_password" placeholder="RajaSekhar" defaultValue="1234"/><br/><br/ >
      <span>Phone</span><br/><br/>

      <label htmlFor="username">Username: </label> <br/>
      <input id="username" type="text"/><br/><br/>
      <label htmlFor="password">Password: </label><br/>
      <input id="password" type="password"/><br/><br/>
    </div>
  );
}

export default App;
