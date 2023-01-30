import Categories from "@/components/module/categories";
import SearchBar from "@/components/module/SearchBar";
import CarsPage from "@/components/template/CarsPage";
import carsData from "@/data/carsData";

const Details = ({}) => {
  return (
    <div>
      <SearchBar /> 
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
};

export default Details;
