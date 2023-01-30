import CarDetail from "@/components/template/CarDetail";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

const carDetail = ({}) => {
  const router = useRouter();
  const { carId } = router.query;
  const carDetail = carsData[carId - 1];

  
  return <CarDetail data={carDetail}/>;
};

export default carDetail;
