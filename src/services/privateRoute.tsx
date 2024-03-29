import {  useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabase";

interface PrivateRoutesProps {
  children: React.ReactNode;
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ children }) => {
  const navigate = useNavigate();

  async function handleClick() {
    const session = await supabase.auth.getSession();
    if (!session.data.session?.access_token) {
      await supabase.auth.signOut();
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  }

  useEffect(() => {
    handleClick();
  }, [navigate]);

  return <div>{children}</div>;
};


export default PrivateRoutes;