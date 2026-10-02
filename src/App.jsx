const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (<p>{props.part.name} {props.part.exercises}</p>)
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  )
}

const Footer = (props) => {
  return (<footer>{props.footer[0]} - {props.footer[1]} - {props.footer[2]}</footer>)
}

const App = () => {
  const course = {
    name: 'CIT-U subject',
    parts: [
      {
        name: 'Industry Elective 1',
        exercises: 3
      },
      {
        name: 'Intelligent Systems 1',
        exercises: 3
      },
      {
        name: 'Industry Elective 2',
        exercises: 3
      }
    ],
    footer: [
      'Edzel C. Señor',
      'CSIT340',
      'G7'
    ]
  }

  return (
  <div>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer footer={course.footer} />
  </div>
)
}

export default App