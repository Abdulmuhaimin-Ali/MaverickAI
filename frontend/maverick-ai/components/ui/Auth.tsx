import { useState } from "react";
import { apiRequest } from "../../lib/api";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const response = await apiRequest("/auth/register", "POST", { email, password });
    console.log(response);
  };

  const handleLogin = async () => {
    const response = await apiRequest("/auth/login", "POST", { email, password });
    console.log(response);
  };

  return (
    <div>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
