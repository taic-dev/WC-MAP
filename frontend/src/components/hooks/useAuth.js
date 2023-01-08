import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(false);
  const url = "/api/session-check";

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url);
        setAuth(res.data);
        console.log("ログイン済み");
      } catch (e) {
        window.location.href = "/login";
        return e;
      }
    })();
  }, []);

  return auth;
};
