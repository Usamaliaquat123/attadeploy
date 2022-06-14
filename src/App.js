import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addUsers,
  deleteUsers,
  updateUserTitle,
  getUsersApi,
} from "./features/Users";
import "./features/App.css";
import axios from "axios";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

function App() {
  const usersList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [updateUsername, setUpdateUserTitle] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      dispatch(getUsersApi({ maal: res.data }));
    });
  }, []);

  return (
    <div className="App">
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          name="text-1542372332072"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          id="text-1542372332072"
          placeholder="TITLE"
        />
        <label for="text-1542372332072">Title</label>
        <div className="req-mark">!</div>
      </div>

      <div className="input-group">
        <input
          className="form-control"
          type="text"
          name="text-1542372332072"
          onChange={(event) => {
            setBody(event.target.value);
          }}
          id="text-1542372332072"
          placeholder="BODY"
        />
        <label for="text-1542372332072">Body</label>
        <div className="req-mark"></div>
      </div>
      {/* <div className="AddUsers"></div> */}

      <button
        className="btn"
        onClick={() => {
          dispatch(
            addUsers({ id: usersList.length + 1, title: title, body: body })
          );
        }}
      >
        ADD USERS
      </button>
      <div className="displayUsers">
        {usersList.map((users, i) => (
          <div key={i}>
            <div className="card-wrap">
              <div className="icon-wrapper">
                <div className="title-text"> Title</div>
                <MdDelete
                  className="upnaDelete"
                  onClick={() => {
                    dispatch(deleteUsers({ id: users.id }));
                  }}
                />
              </div>
              <h2> {users.title}</h2>
              <h1>Body</h1>
              <h4> {users.body}</h4>

              <div className="card-footer">
                <input
                  className="apnaInput"
                  type="text"
                  placeholder="setUpdateUserTitle"
                  onChange={(event) => {
                    setUpdateUserTitle(event.target.value);
                  }}
                />

                <GrUpdate
                  className="apnaUpdate"
                  onClick={() => {
                    dispatch(
                      updateUserTitle({ id: users.id, title: updateUsername })
                    );
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
