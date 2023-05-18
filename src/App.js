import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const data = { name: "", email: "", mobile: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Registered");
  }, [flag]);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.mobile) {
      toast(" 😲 Ooops... All fields are Mandatory");
    } else {
      setFlag(true);
      let temp = users;
      temp.push(inputData);
      setUsers(temp);
      toast(` ${inputData.name} Registered Successfully! ❤️`);
      setInputData({ name: "", email: "", mobile: "" });
    }
  }
  return (
    <>
      {/* <pre>{(flag)? <h2 className="card">Hello {inputData.name},You have registered successfully</h2> : ""}</pre> */}
      <div className="bg-secondary">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card m-5">
                <ToastContainer
                  position="top-center"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
                <h3 className="text-center mt-2 font-italic">
                  Registration Form
                </h3>
                <form
                  className="m-3 font-weight-bold font-italic"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <span>Name :</span>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      value={inputData.name}
                      onChange={handleData}
                    />
                  </div>
                  <div className="form-group">
                    <span>E-mail :</span>
                    <input
                      className="form-control"
                      type="text"
                      name="email"
                      placeholder="Enter Your E-mail id"
                      value={inputData.email}
                      onChange={handleData}
                    />
                  </div>
                  <div className="form-group">
                    <span>Mobile no.:</span>
                    <input
                      className="form-control"
                      type="text"
                      name="mobile"
                      placeholder="Enter Your Mobile no."
                      value={inputData.mobile}
                      onChange={handleData}
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-warning btn-lg"
                    value="SAve"
                  />
                </form>
              </div>
            </div>
            <div className="col-md-12">
              <table className="table table-borderd text-center">
                <tr className="bg-dark text-light">
                  <td>Name</td>
                  <td>E-mail</td>
                  <td>Mobile</td>
                </tr>
                {users.map((value, index) => (
                  <tr key={index}>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.mobile}</td>
                  </tr>
                ))}
              </table>
              {users.length > 0 ? (
                ""
              ) : (
                <h4 className="text-center">No Record Found...</h4>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
