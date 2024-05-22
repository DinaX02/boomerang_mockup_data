import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ButtonInstallPwa = styled.button`
    background-color: #343541 !important;
    color: white;
    font-weight: bold;
    font-size: 15px;
    width: auto;
    height: 36px;
    border-radius: 5px;
    outline: none;
    border: 1px transparent;
    font-family: Montserrat;
`

const InstallButton = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = (e) => {

    if (promptInstall) {
      promptInstall.prompt();
    }
  };

  return (
    <ButtonInstallPwa
      className="download-button"
      onClick={handleInstallClick}
      disabled={!supportsPWA}
    >
      Download App
    </ButtonInstallPwa>
  );
};

export default InstallButton;
