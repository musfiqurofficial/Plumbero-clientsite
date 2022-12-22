import useTitle from "../../../../hooks/useTitle";

const Review = ({
  review,
  handleDelete,
  handleUpdateUser,
  handleInputChange,
}) => {
  useTitle("Reviews");
  const {
    _id,
    serviceName,
    reviewerName,
    message,
    price,
    rating,
    serviceImg,
    status,
  } = review;

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={serviceImg} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{reviewerName}</div>
            <div className="text-sm opacity-50">{serviceName}</div>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white font-semibold text-lg ">
        {message}
        <div className="flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-yellow-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <p className="text-gray-900 whitespace-no-wrap ">{rating}</p>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white font-semibold text-lg ">
        <p className="text-gray-900 whitespace-no-wrap">{price} Taka</p>
      </td>
      <th className="py-10 px-2 border-b border-gray-200 bg-white grid lg:grid-cols-2 gap-3">
        {" "}
        <label
          htmlFor="my-modal-3"
          onClick={() => handleUpdateUser(_id)}
          type="submit"
          className="w-full px-2 py-2 text-center font-semibold text-lg  focus:bg-blue-50 active:bg-blue-100 hover:text-white text-black hover:bg-red-600 bg-red-200"
        >
          {status ? status : "Pending"}
        </label>{" "}
        <button
          onClick={() => handleDelete(_id)}
          type="submit"
          className="w-full px-2 py-2 text-center font-semibold text-lg focus:bg-blue-50 active:bg-blue-100 text-white hover:text-black bg-red-600 hover:bg-red-200"
        >
          Delete
        </button>{" "}
      </th>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />{" "}
      <div className="modal">
        {" "}
        <div className="modal-box relative">
          {" "}
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>{" "}
          <form onSubmit={handleUpdateUser}>
            {" "}
            <input
              onChange={handleInputChange}
              type="text"
              name="serviceName"
              defaultValue={serviceName}
              placeholder=""
            />{" "}
            <input
              onChange={handleInputChange}
              type="text"
              name="reviewerName"
              defaultValue={reviewerName}
              placeholder=""
            />{" "}
            <input
              onChange={handleInputChange}
              type="text"
              name="price"
              defaultValue={price}
              placeholder=""
            />{" "}
            <input
              onChange={handleInputChange}
              type="text"
              name="rating"
              defaultValue={rating}
              placeholder=""
            />{" "}
            <button type="submit" className="btn">
              Submit
            </button>{" "}
          </form>{" "}
        </div>{" "}
      </div>
    </tr>
  );
};

export default Review;

// <>
//     <tr>
//         <td className="border-b border-gray-200 bg-white text-sm">
//             <div className="flex items-center">
//                 <div className="flex-shrink-0 w-1/4 h-w-1/4">
//                     <img className="w-full"
//                         src={serviceImg}
//                         alt="" />
//                 </div>
//                 <div className="ml-3">
//                     <p className="text-gray-900 whitespace-no-wrap font-semibold text-lg">
//
//                     </p>
//                     <p className="text-gray-900 whitespace-no-wrap text-sm">
//
//                     </p>
//                     <p className="text-gray-900 whitespace-no-wrap text-sm">
//
//                     </p>
//                 </div>
//             </div>
//         </td>
//         <td >
//
//             <div className='flex items-center '>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-400">
//                     <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
//                 </svg>
//                 <p className="text-gray-900 whitespace-no-wrap ">{rating}</p>
//             </div>
//         </td>
//         <td className="py-10 px-2 border-b border-gray-200 bg-white grid lg:grid-cols-2 gap-3">
//             <label htmlFor="my-modal-3" onClick={() => handleUpdateUser(_id)} type="submit" className="w-full px-8 py-3 font-semibold text-lg rounded-md focus:bg-blue-50 active:bg-blue-100 hover:text-white text-black hover:bg-red-600 bg-red-200">{status ? status : "Pending"}</label>
//             <button onClick={() => handleDelete(_id)} type="submit" className="w-full px-8 py-3 font-semibold text-lg rounded-md focus:bg-blue-50 active:bg-blue-100 hover:text-white text-black hover:bg-red-600 bg-red-200">Delete</button>
//         </td>
//
//     </tr>
// </>
