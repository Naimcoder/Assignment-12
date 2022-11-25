import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/UseContext";

const BookingModel = ({booked, setBooked }) => {
  const { name, resale_price, original_price, location,picture} = booked;
    const {user}=useContext(AuthContext)
    const handleBooking = (event) => {
          event.preventDefault();
          const form = event.target;
          const productName = form.productName.value;
          const name = form.name.value;
          const email = form.email.value;
          const phone = form.number.value;
          const original_price = form.original_price.value;
          const resale_price = form.resale_price.value;
      
          const booking = {
            productname: productName,
            user: name,
            email,
            resale_price,
            original_price,
            phone,
            picture,
          };
          console.log(booking)
          fetch("http://localhost:8000/bookings", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(booking),
          })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              // setBooked(null);
              toast.success("Booking Confirm");
          }
          else {
              toast.error(data.message);
          }
        });
      
        };

  return (
    <div>
      {/* The button to open modal */}
    
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
           <div>
           <form onSubmit={handleBooking}>
            <input
              type="text"
              name="productName"
              disabled
              className="input w-full py-5 my-2 "
              value={name}
            />
            <br></br>
            <input
              type="text"
              placeholder="Your Name"
              className="input w-full  py-5 my-2 "
              name="name"
              defaultValue={user?.displayName}
            />
            <br></br>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input w-full  py-5 "
              name="email"
              defaultValue={user?.email}
            />
            <br></br>
            <input
              type="number"
              placeholder="Enter Your Number"
              className="input w-full py-5 my-2"
              name="number"
            />
            <input
              type="number"
              placeholder="Enter Your Number"
              className="input w-full py-5 my-2"
              name="resale_price"
              defaultValue={resale_price}
            />
            <input
              type="number"
              placeholder="Enter Your Number"
              className="input w-full py-5 my-2"
              name="original_price"
              defaultValue={original_price}
            />
            <button  htmlFor="bookingModal" className="btn w-full  btn-primary my-3" type="submit">
              Submit
            </button>
          </form>

           </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModel;

