import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import { useState } from "react";

const Register = () => {
  const [get_error, set_get_error] = useState("");
  const [success, set_success] = useState("");
  const handle_register = (e) => {
    e.preventDefault();
    const get_email = e.target.email.value;
    const get_password = e.target.password.value;
    console.log(get_email, get_password);

    if (get_password.length < 6) {
      set_get_error("please input at least 6 character");
      return;
    }

    // reset error
    set_get_error("");
    // set success
    set_success("");

    // creat email and password
    createUserWithEmailAndPassword(auth, get_email, get_password)
      .then((result) => {
        console.log(result.user);
        set_success(result.user.email);
      })
      .catch((error) => {
        console.error(error);
        set_get_error(error.message);
      });
  };
  return (
    <div>
      <h1 className="text-3xl text-center mb-10">Register</h1>

      <div className="mx-auto md:w-1/2">
        <form onSubmit={handle_register}>
          <input
            className="mb-4 w-3/4 px-4 py-2 border rounded-xl"
            type="email"
            name="email"
            id=""
            placeholder="submit email"
            required
          />
          <br />
          <input
            className="mb-4 w-3/4 px-4 py-2 border rounded-xl"
            type="password"
            name="password"
            placeholder="password"
            required
            id=""
          />
          <br />
          <input
            className="mb-4 w-3/4 px-4 py-2 border rounded-xl btn-secondary cursor-pointer text-2xl"
            type="submit"
            value="Register"
          />
        </form>
        {get_error && <p className="text-red-800 text-xl">{get_error}</p>}
        {success && <p>{success}</p>}
      </div>
    </div>
  );
};

export default Register;
