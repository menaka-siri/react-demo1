import React, { FormEvent, useRef, useState } from "react";

const Form = () => {
  /*   const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };
  const handleSubmit1 = (event: FormEvent) => {
    event.preventDefault();
    console.log("Submitted");
    if (nameRef.current !== null) {
      console.log(nameRef.current.value);
      person.name = nameRef.current.value;
    }
    if (ageRef.current !== null) {
      console.log(ageRef.current.value);
      person.age = parseInt(ageRef.current.value);
    }
    console.log(person);
  }; */

  const [person, setPerson] = useState({
    name: "",
    age: '',
  });

  const handleSubmit2 = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit2}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* <input ref={nameRef} id="name" type="text" className="form-control" /> */}
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          value= {person.name}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        {/* <input ref={ageRef} id="age" type="number" className="form-control" /> */}
        <input
          onChange={(event) =>
            setPerson({ ...person, age: event.target.value })
          }
          value={person.age}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
