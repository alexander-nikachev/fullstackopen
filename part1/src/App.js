
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, {props.age}</p>
    </div>
  )
}

const App = () => {
const name_1 = "Misha"
const age_1 = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Sahsa" />
      <Hello name= {name_1} age={age_1} />
    </div>
  )
}

export default App;
