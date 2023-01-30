import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const router = useRouter();
  const searchhandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("Please Enter minimum and maximum price!");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          type="text"
          name="min"
          value={min}
          placeholder="enter min-price"
          onChange={(event) => setMin(event.target.value)}
        />
        <input
          type="text"
          name="max"
          value={max}
          placeholder="enter max-price"
          onChange={(event) => setMax(event.target.value)}
        />
      </div>
      <button onClick={searchhandler}>Search</button>
    </div>
  );
};

export default SearchBar;
