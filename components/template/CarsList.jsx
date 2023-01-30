import { useRouter } from "next/router";
import Back from "../icons/Back";
import CardCar from "../module/CardCar";
import styles from "./CarsList.module.css";

const CarsList = ({ data }) => {
  const router = useRouter();

  // const {} = data;
  const backHandler = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={backHandler}>
        <Back />
        <p>back</p>
      </div>
      <div className={styles.cards}>
        {
          data.map(itemCar => <CardCar key={itemCar.id} {...itemCar} />)
        }
      </div>
    </div>
  );
};

export default CarsList;
