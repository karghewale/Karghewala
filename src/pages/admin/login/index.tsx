import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import { supabase } from "../../../utils/supabase";
import toast from "react-hot-toast";

export const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    usernameOrEmail: "",
    password: "",
    usernameOrEmailError: "",
    passwordError: "",
  });

  const validateForm = () => {
    let isValid = true;
    if (data.usernameOrEmail === "") {
      setData((prevData) => ({
        ...prevData,
        usernameOrEmailError: "Please enter a username or email",
      }));
      isValid = false;
    }
    if (data.password === "") {
      setData((prevData) => ({
        ...prevData,
        passwordError: "Please enter a password",
      }));
      isValid = false;
    }
    return isValid;
  };

  const handleLogin = async (formData: any) => {
    loginUser(formData).then(() => {
      navigate("/dashboard");
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validateForm()) {
      handleLogin(data);
    }
  };

  const loginUser = async (data1: {
    usernameOrEmail: string;
    password: string;
  }) => {
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: data1.usernameOrEmail,
        password: data1.password,
      });
      if (error) {
        toast.error(error.message);
        navigate("/admin");
      } else {
        return data;
      }
    } catch (error) {
      console.error("Registration API error:", error);
      throw error;
    }
  };
  return (
    <div className={styles.RegistrationWrapper}>
      <div className={styles.headers}>
        <h2>Hello Again!</h2>
        <h3>
          Welcome back to Karghewala - Admin,<br></br> login to continue
        </h3>
      </div>
      <div className={styles.InputContainerWrapper}>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={data.usernameOrEmail}
            onChange={(e) =>
              setData({
                ...data,
                usernameOrEmail: e.target.value,
                usernameOrEmailError: "",
              })
            }
          />
          {data.usernameOrEmailError && <p>{data.usernameOrEmailError}</p>}
          <input
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
                passwordError: "",
              })
            }
          />
          {data.passwordError && <p>{data.passwordError}</p>}
        </div>
        <div className={styles.buttonWrapper}>
          <button onClick={handleSubmit}>Log In</button>
          <button onClick={() => navigate("/home")}>Home</button>
        </div>
      </div>
    </div>
  );
};
