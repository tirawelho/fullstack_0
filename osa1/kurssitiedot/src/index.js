import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
          {
            name: 'Reactin perusteet',
            exercises: 10
          },
          {
            name: 'Tiedonvälitys propseilla',
            exercises: 7
          },
          {
            name: 'Komponenttien tila',
            exercises: 14
          }
        ]
      }
    
  

  return (
    <div>
      <Header course={course}></Header>
      <Content course={course}></Content>
      <Total course={course}></Total>
    </div>
  )
}

const Header = (props) => {
    console.log(props)
  return (
      <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.course.parts[0].name} joku={props.course.parts[0].exercises}></Part>
      <Part name={props.course.parts[1].name} joku={props.course.parts[1].exercises}></Part>
      <Part name={props.course.parts[2].name} joku={props.course.parts[2].exercises}></Part>
    </div>  
  )
}

const Total = (props) => {
    let summa =0;
    for (let i=0; i<3 ; i++) {
        summa+=props.course.parts[i].exercises;
    }
  return (
    <p>yhteensä {summa} tehtävää</p>
  )
}

const Part = (props) => {
    return (
      <p>{props.name} {props.joku}</p>
    )
  }



ReactDOM.render(<App />, document.getElementById('root'))
