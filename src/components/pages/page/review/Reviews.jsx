import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const [storedUser, setStoredUser] = useState({});

  useEffect(() => {
    fetch("https://assingment-11-server-seven.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStoredUser(data);
      });
  }, []);

  console.log(storedUser);
  const [user, setUser] = useState(storedUser);

  const handleUpdateUser = (event) => {
    event.preventDefault();
    fetch(
      `https://assingment-11-server-seven.vercel.app/reviews/${storedUser._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("user updated");
          console.log(data);
        }
      });
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order!"
    );
    if (proceed) {
      fetch(`https://assingment-11-server-seven.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Successfully Delete!");
            const remaining = reviews.filter((odr) => odr._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  useEffect(() => {
    fetch("https://assingment-11-server-seven.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);

  return (
    <div>
      <div>
        <div className="antialiased font-sans bg-gray-200">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
              <div className="overflow-x-auto w-full">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                      <th className="text-lg">
                        Review Table{" "}
                        <span className="text-red-600">{reviews.length}</span>
                      </th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviews?.map((review) => (
                      <Review
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                        handleUpdateUser={handleUpdateUser}
                        handleInputChange={handleInputChange}
                      ></Review>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default Reviews;
