import { useQuery } from "@tanstack/react-query";
import { Link, useLoaderData } from "react-router-dom";

const BarndName = () => {
    const item= useLoaderData()
    console.log(item)
  const { data: Brand = [] } = useQuery({
    queryKey: ["BrandName"],
    queryFn: () =>
      fetch("http://localhost:8000/categoryname").then((res) => res.json()),
  });
  return (
    <div>
        <div>
            <h2 className="text-center py-6  font-semibold text-5xl">Caregorys</h2>
        </div>
      <div className="grid grid-cols-3  gap-14 container mx-auto mt-20">
        {Brand.map((Brands) => (
          <div key={Brands._id} className=" bg-slate-200">
            <div className="p-8">
              <img className="w-full" src={Brands.img} alt="" />
              <Link to={`/categorys/${Brands.c_id}`}>
                <button className="py-3 px-5 bg-black text-white">
                  BOOK NOW
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarndName;
