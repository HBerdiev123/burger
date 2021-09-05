import { useEffect, useRef, useState } from "react";

const Registration = () => {
  const [open, setOpen] = useState(false);
  const modalClass = open
    ? "authentication-box dropdown-menu show"
    : "authentication-box dropdown-menu";

  const ref = useRef();
  console.log(open);

  useEffect(() => {
    const onBodyClick = (e) => {
      if (!ref.current.contains(e.target)) {
        setOpen(true);
        console.log("click is performed on modal");
        return;
      } else {
        setOpen(false);
      }
      console.log("click is outside of the modal");
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  });

  const handleClick = (e) => {
    console.log(e.which);
  };

  return (
    <div ref={ref} className="navbar-option-item navbar-option-authentication">
      <button
        className={`navbar-authentication-button ${open ? "show" : ""}`}
        type="button"
        onClick={(e) => this.handleClick(e)}
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        id="auth3"
      >
        <i className="flaticon-add-user"></i>
      </button>

      <div className={modalClass} aria-labelledby="auth4">
        <div
          className="authentication-close"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <i className="flaticon-cancel"></i>
        </div>
        <div className="authentication-body">
          <ul className="authentication-tab">
            <li
              className="authentication-tab-item active"
              data-authentication-tab="1"
            >
              Log In
            </li>
            <li className="authentication-tab-item" data-authentication-tab="2">
              Sign Up
            </li>
          </ul>
          <div className="authentication-details">
            <div
              className="authentication-details-item active"
              data-authentication-details="1"
            >
              <form>
                <div className="form-group mb-20">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="User Name"
                    />
                  </div>
                </div>
                <div className="form-group mb-20">
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="authentication-action mb-20">
                  <div className="authentication-action-item">
                    <a href="forget-password.html">Forget Password?</a>
                  </div>
                  <div className="authentication-action-item">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="check1"
                      />
                      <label className="custom-control-label" for="check1">
                        Remember Me
                      </label>
                    </div>
                  </div>
                </div>
                <div className="authentication-btn">
                  <button className="btn full-width btn-border mb-20">
                    Log In
                  </button>
                  <button className="btn full-width">
                    <i className="icofont-google-plus"></i>Log In With Google
                  </button>
                </div>
              </form>
            </div>
            <div
              className="authentication-details-item"
              data-authentication-details="2"
            >
              <form>
                <div className="form-group mb-20">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="User Name"
                    />
                  </div>
                </div>
                <div className="form-group mb-20">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group mb-20">
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="form-group mb-20">
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <div className="authentication-action mb-20">
                  <div className="authentication-action-item">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="check2"
                      />
                      <label className="custom-control-label" for="check2">
                        I agree that my submitted data is being collected and
                        stored. For further details on handling user data, see
                        our <a href="privacy-policy.html">Privacy Policy</a>.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="authentication-btn">
                  <button className="btn full-width btn-border mb-20">
                    Log In
                  </button>
                  <button className="btn full-width">
                    <i className="icofont-google-plus"></i>Log In With Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
