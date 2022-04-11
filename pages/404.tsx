import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Notfound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundClip: "border-box",
        backgroundColor: "#fafafa",
        backgroundImage: 'url("/images/404.gif")',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        fontFamily: "sans-serif",
        width: "100vw",
      }}
    >
      <button
        style={{
          border: "none",
          boxShadow: "0 0 0 1px #000",
          color: "#fafafa",
          cursor: "pointer",
          fontSize: "2rem",
          height: 60,
          outline: "none",
          marginTop: 250,
          backgroundColor: "#333",
          display: "flex",
        }}
      >
        <Link href="/">
          <a style={{ color: "#fafafa", textDecoration: "none" }}>
            <AiOutlineArrowLeft size={50} color={"#dddd"} />
            Retourner à l'accueil
          </a>
        </Link>
      </button>
    </div>
  );
};

export default Notfound;
