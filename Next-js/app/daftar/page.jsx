"use client";

import "./style.css";

const Daftar = () => {
	return (
      <main>

         <div class="wrapper">
            <form action="">
               <h1>Daftar</h1>
               <div class="input-box">
                  <p>Nama Panggilan</p>
                  <input type="text" />
                  <i class="bx bxs-user"></i>
               </div>
               <div class="input-box">
                  <p>Username</p>
                  <input type="password" />
                  <i class="bx bxs-user"></i>
               </div>
               <div class="input-box">
                  <p>Password</p>
                  <input type="password" />
                  <i class="bx bxs-user"></i>
               </div>
               <div class="input-box">
                  <p>No WA</p>
                  <input type="password" />
                  <i class="bx bxs-user"></i>
               </div>
               <p>Sudah punya akun?</p>
               <br />
               <div class="btn-field">
                  <button type="button">Login</button>
                  <button type="button">Daftar</button>
               </div>
            </form>
         </div>
      </main>
	);
};

export default Daftar;
