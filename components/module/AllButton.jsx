import Link from "next/link";
import styles from "./Allbutton.module.css";

const AllButton = () => {
  return (
      <div className={styles.container}>
        <Link href="/cars">See all cars</Link>
      </div>
  );
};

export default AllButton;
