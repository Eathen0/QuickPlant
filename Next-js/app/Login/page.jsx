"use client";

import "./style.css";

const LoginPage = () => {
	return (
      <main>
         <div className="wrapper">
            <form action="">
               <h1>Login</h1>
               <div className="input-box">
                  <p>Username</p>
                  <input type="text" />
                  <i className="bx bxs-user"></i>
               </div>
               <div className="input-box">
                  <p>Password</p>
                  <input type="password" />
                  <i className="bx bxs-user"></i>
               </div>
               <p>Belum punya akun?</p>
               <br />
               <div className="btn-field">
                  <button type="button">Login</button>
                  <button type="button">Daftar</button>
               </div>
            </form>
         </div>
      </main>
	);
};

export default LoginPage;
