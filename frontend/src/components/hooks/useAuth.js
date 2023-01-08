import axios from "axios";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [auth, setAuth] = useState(false);
  const url = "/api/session-check";

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url);
        setAuth(res.data);
      } catch (e) {
        window.location.href = "/login";
        return e;
      }
    })();
  }, []);

  return auth;
};