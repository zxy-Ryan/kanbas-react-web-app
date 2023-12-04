import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { clearCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };

  const signout = async () => {
    await client.signOut();
    dispatch(clearCurrentUser());
    navigate("/project/signin");
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);

  const save = async () => {
    try {
      await client.updateUser(account);
      alert("Save successful");
    } catch (error) {
      console.error("Save failed:", error);
      alert("Save failed");
    }
  };

  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <input
            value={account.username}
            className="form-control mb-2"
            onChange={(e) =>
              setAccount({ ...account, username: e.target.value })
            }
          />
          <input
            value={account.password}
            type="password"
            className="form-control mb-2"
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />
          <input
            value={account.firstName}
            className="form-control mb-2"
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
          />
          <input
            value={account.lastName}
            className="form-control mb-2"
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
          />
          <input
            value={
              account.dob
                ? new Date(account.dob).toISOString().split("T")[0]
                : ""
            }
            type="date"
            className="form-control mb-2"
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
          />
          <input
            value={account.email}
            className="form-control mb-2"
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
          <select
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
            className="form-control mb-2"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button
            onClick={save}
            className="btn btn-primary mb-2"
            style={{ width: "100%" }}
          >
            Save
          </button>
          <Link
            to="/project/admin/users"
            className="btn btn-warning w-100  mb-2"
          >
            Users
          </Link>
          <button onClick={signout} className="btn btn-danger" style={{ width: "100%" }}>
            Signout
          </button>
        </div>
      )}
    </div>
  );
}
export default Account;
