import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

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
            <div key={Brands._id} className="">
              <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                <div class="w-full flex items-center justify-center hover:bg-gray-100 h-64 bg-white bg-center bg-cover rounded-lg shadow-xl">
                  <img src={Brands.img} alt="" />
                </div>
                <div class="w-56 -mt-10 overflow-hidden  bg-gray-100   rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                  <h3 class="py-4 font-bold text-xl hover:text-blue-600 tracking-wide text-center text-gray-800 uppercase dark:text-white">
                   {Brands.name}
                  </h3>
                  
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BarndName;
