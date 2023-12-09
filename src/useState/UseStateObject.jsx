import { useState } from "react";
import UseStateCounter from "./UseStateCounter";

const UseStateObject = () => {
  const [kisi, setKisi] = useState({
    name: "Ahmet Kan",
    age: 30,
    salary: 50000,
  });

  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
    if (toggle) {
      setKisi({
        name: "canan can",
        age: 40,
        salary: 60000,
      });
    } else {
      setKisi({
        name: "Ahmet Kan",
        age: 30,
        salary: 50000,
      });
    }
  };

  console.log(toggle);
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

      <button
        onClick={() =>
          setKisi({
            name: "canan can",
            age: 40,
            salary: 60000,
          })
        }
      >
        full Change
      </button>

      <button onClick={handleToggle}>Toggle</button>
      {toggle && <UseStateCounter />}
    </div>
  );
};

export default UseStateObject;
