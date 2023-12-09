import { useState } from "react";

const UseStateObject = () => {
  //   const [name, setName] = useState("Ahmet Can");
  //   const [age, setAge] = useState(30);
  //   const [salary, setSalary] = useState(50000);

  const [kisi, setKisi] = useState({
    name: "Ahmet Kan",
    age: 30,
    salary: 50000,
  });

  console.log(kisi);
  return (
    <div>
      <h1>USE STATE OBJECT </h1>
      <h2>NAME:{kisi.name}</h2>
      <h2>AGE:{kisi.age}</h2>
      <h2>Salary:{kisi.salary}</h2>

      <button onClick={() => setKisi({ ...kisi, name: "Mehmet Kan" })}>
        Change Name
      </button>
      <button onClick={() => setKisi({ ...kisi, age: kisi.age + 1 })}>
        inc age
      </button>
      <button onClick={() => setKisi({ ...kisi, salary: kisi.salary + 10000 })}>
        inc salary
      </button>
    </div>
  );
};

export default UseStateObject;
