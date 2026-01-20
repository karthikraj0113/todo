import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Swal from "sweetalert2";
let App = () => {
  let [todo, setTodo] = useState([]);
  let [limit, setlimit] = useState(5);
  let [skip, setSkip] = useState(0);
  let [total, setTotal] = useState(0);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/todos")
      .then((res) => {
        setTodo(res.data.todos);
        setlimit(res.data.limit);
        setSkip(res.data.skip);
        setTotal(res.data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    if (skip > 0 && limit > 0) {
      axios
        .get(`https://dummyjson.com/todos?limit=${limit}&skip=${skip}`)
        .then((res) => {
          setTodo(res.data.todos);
          setTotal(res.data.total);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [limit, skip]);
  return (
    <div>
      <div style={{ backgroundColor: "whitesmoke", color: "red" }}>
        <p> total:{total}</p>
        <p> skip:{skip}</p>
        <p> limit:{limit}</p>
      </div>
      <hr></hr>
      <button
        className="btn"
        onClick={() => {
          axios
            .get("https://dummyjson.com/todos/5")
            .then((res) => {
              setTodo([res.data]);
              setlimit(5);
              setSkip(0);
              setTotal(0);
            })
            .catch((err) => {
              console.log();
            });
        }}
      >
        Get only one
      </button>
      <button
        className="btn"
        onClick={() => {
          axios
            .get("https://dummyjson.com/todos/random")
            .then((res) => {
              setTodo([res.data]);
              setlimit(5);
              setSkip(0);
              setTotal(0);
            })
            .catch((err) => {
              console.log();
            });
        }}
      >
        Get random one
      </button>
      <button
        className="btn"
        onClick={() => {
          axios
            .get("https://dummyjson.com/todos/random/5")
            .then((res) => {
              setTodo(res.data);
              setlimit(5);
              setSkip(0);
              setTotal(0);
            })
            .catch((err) => {
              console.log();
            });
        }}
      >
        Get random 5
      </button>
      <button
        className="btn"
        onClick={() => {
          axios
            .get("https://dummyjson.com/todos/user/152")
            .then((res) => {
              setTodo(res.data.todos);
              setlimit(res.data.limit);
              setSkip(res.data.skip);
              setTotal(res.data.total);
            })
            .catch((err) => {
              console.log();
            });
        }}
      >
        Get all todos by user id 152
      </button>
      <button
        className="btn"
        onClick={() => {
          let dataTobeAdded = {
            todo: "Use DummyJSON in the project",
            completed: false,
            userId: 5,
          };
          axios
            .post("https://dummyjson.com/todos/add", dataTobeAdded)
            .then((res) => {
              setTodo((prev) => [res.data, ...prev]);
              Swal.fire({
                icon: "success",
                title: "data added",
              });
            })
            .catch((err) => {
              console.log(err);
              Swal.fire({
                icon: "error",
                title: "contact admin",
              });
            });
        }}
      >
        add todo
      </button>
      <button
        className="btn"
        onClick={() => {
          let dataTobeUpdated = {
            completed: false,
          };
          let index = 0;
          let updatedValue = todo[index];
          updatedValue.completed = false;
          axios
            .put("https://dummyjson.com/todos/1", dataTobeUpdated)
            .then((res) => {
              setTodo((prev) => [
                ...prev.slice(0, index),
                res.data,
                ...prev.slice(index + 1),
              ]);
              Swal.fire({
                icon: "success",
                title: "data updated",
              });
            })
            .catch((err) => {
              console.log(err);
              Swal.fire({
                icon: "error",
                title: "contact admin",
              });
            });
        }}
      >
        update todo
      </button>
      <button
        className="btn"
        onClick={() => {
          let index = 0;
          axios
            .delete("https://dummyjson.com/todos/1")
            .then((res) => {
              setTodo((prev) => [
                ...prev.slice(0, index),
                ...prev.slice(index + 1),
              ]);
              Swal.fire({
                icon: "success",
                title: "data deleted",
              });
            })
            .catch((err) => {
              console.log(err);
              Swal.fire({
                icon: "error",
                title: "contact admin",
              });
            });
        }}
      >
        delete todo
      </button>
      <hr></hr>
      <div>
        <input
          type="number"
          max={total}
          onChange={(event) => {
            setSkip((prev) => event.target.value);
          }}
          placeholder="skip"
        ></input>
        <input
          type="number"
          max={Math.ceil(total / limit)}
          onChange={(event) => {
            setlimit((prev) => event.target.value);
          }}
          placeholder="limit"
        ></input>
      </div>
      <hr></hr>

      {todo.map((item) => {
        return (
          <div>
            <p> id :{item.id}</p>
            <p> task :{item.todo}</p>
            <p> Status :{item.completed ? "done" : "todo"}</p>
            <p> userID :{item.userId}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
export default App;
