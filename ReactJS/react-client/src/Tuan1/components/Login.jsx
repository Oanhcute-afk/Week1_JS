import "./Logincss.css";
function Login(){
    return(
        
  <div class="overlay">
    <div class="login-box fade-in">
      <span class="close">&times;</span>

      <h2>Login</h2>

      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />

      <button>Login</button>
    </div>
  </div>
    )

}
export default Login