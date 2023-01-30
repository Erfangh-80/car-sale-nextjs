import styles from "./CarsPage.module.css";
import CardCar from "../module/CardCar";

const CarsPage = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <CardCar key={car.id} {...car}/>
      ))}
    </div>
  );
};

export default CarsPage;
