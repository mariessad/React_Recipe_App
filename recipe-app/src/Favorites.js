import React from 'react'
import { useState, useEffect } from "react";

function Favorites(props) {
    localStorage.setItem("key", "value")

    useEffect(() => {
        // storing input name
        localStorage.setItem("name", JSON.stringify());
      }, []);

  return (
    <div>
    <h2>Favorites</h2>
    </div>
  )
}

export default Favorites