import AllButoon from "@/components/module/AllButton ";
import Categories from "@/components/module/categories";
import SearchBar from "@/components/module/SearchBar";
import CarsPage from "@/components/template/CarsPage";
import carsData from "@/data/carsData";

export default function Home() {
  const cars = carsData.slice(0, 3);

  return (
    <div>
      <SearchBar />
      <Categories />
      <AllButoon />
      <CarsPage data={cars} />
    </div>
  );
}
