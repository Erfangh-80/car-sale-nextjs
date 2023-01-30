import { useRouter } from "next/router";
import carsData from "@/data/carsData";
import CarsList from "@/components/template/CarsList";

const CategoryCar = () => {
  const router = useRouter();
  const { categoryId } = router.query;
  const carsCategorys = carsData.filter((car) => car.category === categoryId);

  return <CarsList data={carsCategorys}/>;
};

export default CategoryCar;
