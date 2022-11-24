import React, { useContext } from "react";
import { AuthContext } from "../../Context/UseContext";

const BookingModel = ({booked}) => {
    const {user}=useContext(AuthContext)
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
           <form>
            <input
              type="text"
              value={booked.name}
              disabled
              className="input w-full py-5 my-2 "
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
              name="number"
            //   defaultValue={resale_price}
            />
            <input
              type="number"
              placeholder="Enter Your Number"
              className="input w-full py-5 my-2"
              name="number"
            //   defaultValue={original_price}
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
