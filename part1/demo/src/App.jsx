/* eslint-disable react/prop-types */
const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>

    </div>
  )
}


const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <div>
      <p>Hello world</p>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App