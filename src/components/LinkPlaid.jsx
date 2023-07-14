import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} from "react-plaid-link";
import axios from "axios";

const LinkPlaid = () => {
  const [link_token, setLinkToken] = useState("");

  useEffect(() => {
    async function getLinkToken() {
      const response = await axios.post(
        "http://localhost:8080/api/plaid/create_link_token",
        {},
        { withCredentials: true }
      );

      console.log(
        "Response 'FrontEnd' link_token:\n",
        response.data.link_token
      );
      setLinkToken(response.data.link_token);
    }
    getLinkToken();
  }, []);

  const config = (PlaidLinkOptions = {
    onSuccess: (public_token, metadata) => {},
    onExit: (err, metadata) => {},
    onEvent: (eventName, metadata) => {},
    token: link_token,
    //required for OAuth; if not using OAuth, set to null or omit:
    receivedRedirectUri: window.location.href,
  });

  const { open, exit, ready } = usePlaidLink(config);
  return (
    <div>
      <h1>You are inside Link PLaid</h1>
    </div>
  );
};

export default LinkPlaid;
