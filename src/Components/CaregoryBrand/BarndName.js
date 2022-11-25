import { useQuery } from "@tanstack/react-query";
import { Link} from "react-router-dom";

const BarndName = () => {

  const { data: Brand = [] } = useQuery({
    queryKey: ["BrandName"],
    queryFn: () =>
      fetch("http://localhost:8000/categoryname").then((res) => res.json()),
  });
  return (
    <div>
        <div>
            <h2 className="text-center py-6  font-semibold text-5xl">Categorys</h2>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-14 container mx-auto mt-20">
        {Brand.map((Brands) => (
          <Link to={`/categorys/${Brands.c_id}`}>
          <div key={Brands._id} className=" bg-gray-100">
            <div className="p-8">
              <img className="w-full" src={Brands.img} alt="" />
               <h3 className="text-2xl text-blue-600 font-medium">{Brands.name}</h3>
            </div>
          </div>
        </Link>
        ))}
      </div>
    </div>
  );
};

export default BarndName;
