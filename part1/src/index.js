import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const Header = ({ courseName }) => <h1>{courseName}</h1>;

  const Part = ({ part, exercise }) => (
    <p>
      {part} {exercise}
    </p>
  );

  const Content = ({ parts, exercises }) => (
    <div>
      <Part part={parts[0]} exercise={exercises[0]} />
      <Part part={parts[1]} exercise={exercises[1]} />
      <Part part={parts[2]} exercise={exercises[2]} />
    </div>
  );

  const Total = ({ n }) => <p>Number of exercises {n}</p>;

  return (
    <div>
      <Header courseName={course}></Header>
      <Content
        parts={[part1, part2, part3]}
        exercises={[exercises1, exercises2, exercises3]}
      ></Content>
      <Total n={exercises1 + exercises2 + exercises3}></Total>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
