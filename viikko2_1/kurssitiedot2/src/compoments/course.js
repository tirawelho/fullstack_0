import React from 'react'
const Header = props => <h1>{props.course}</h1>
const Total= (props) => {let kaikki= props.sum.reduce((accumulator, osa) => accumulator + osa.exercises, 0) 
    return (<p>yht. {kaikki} tehtavaa</p>)
}
const Part = (props) => {
    return (<p> {props.osa.name} {props.osa.exercises}</p>)
}
const Content = (props) => {
    return (
        <div> {props.parts.map(a => <Part  key = {a.name} osa={a}/>)}</div>
    )
}
const  Course= (props ) => {
    return ( 
    <div>
        <Header course ={props.course.name}/>
        <Content parts={props.course.parts}/>
        <Total sum ={props.course.parts}/>
    </div>)
}
const Courses = (props) => {
    return (
    <div>
            {props.course.map(course=> <Course key={course.name} course={course}/>)}
        </div>
    )
}
export default Courses