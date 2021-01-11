import React, { useEffect, useState } from "react";
import axios from "axios";

import DragonsList from "../../components/DragonsList";

export default function DragonList() {
  const [dragons, setDragons] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon")
      .then((response) => {
        const { data } = response;
        data.sort((a, b) => a.name.localeCompare(b.name));
        setLoading(false);
        setDragons(data);
      });
  }, []);

  return (
    <div className="py-5">
      <DragonsList
        loading={loading}
        dragons={dragons}
        setDragons={setDragons}
      />
    </div>
  );
}
