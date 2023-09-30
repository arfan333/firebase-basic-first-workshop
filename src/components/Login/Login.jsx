import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";

const Login = () => {

    const handle_login = e => {
        e.preventDefault()
        const login_email = e.target.email.value 
        const login_password = e.target.password.value 
        console.log(login_email, login_password);

        signInWithEmailAndPassword(auth, login_email, login_password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => console.error(error))
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
         </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handle_login}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
