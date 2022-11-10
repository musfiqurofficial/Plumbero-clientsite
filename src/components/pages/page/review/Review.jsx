import useTitle from '../../../../hooks/useTitle';

const Review = ({ review, handleDelete, handleUpdateUser, handleInputChange }) => {
    useTitle('Reviews')
    const { _id, serviceName, reviewerName, price, rating, serviceImg, status } = review;

    return (
        <>
            <tr>
                <td className="border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-1/4 h-w-1/4">
                            <img className="w-full"
                                src={serviceImg}
                                alt="" />
                        </div>
                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap font-semibold text-lg">
                                {serviceName}
                            </p>
                            <p className="text-gray-900 whitespace-no-wrap text-sm">
                                {reviewerName}
                            </p>
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white font-semibold text-lg ">
                    <p className="text-gray-900 whitespace-no-wrap">{price} Taka</p>
                    <p className="text-gray-900 whitespace-no-wrap">{rating}</p>
                </td>
                {/* <td className="font-semibold text-lg  px-5 py-5 border-b border-gray-200 bg-white ">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {service.data}
                    </p>
                </td> */}
                <td className="py-10 px-2 border-b border-gray-200 bg-white grid lg:grid-cols-2 gap-3">
                    <label htmlFor="my-modal-3" onClick={() => handleUpdateUser(_id)} type="submit" className="w-full px-8 py-3 font-semibold text-lg rounded-md focus:bg-blue-50 active:bg-blue-100 hover:text-white text-black hover:bg-red-600 bg-red-200">{status ? status : "Pending"}</label>

                    {/* <button onClick={() => handleStatusUpdate(_id)} type="submit" className="w-full px-8 py-3 font-semibold text-lg rounded-md focus:bg-blue-50 active:bg-blue-100 hover:text-white text-black hover:bg-red-600 bg-red-200">{status ? status : "Pending"}</button> */}
                    <button onClick={() => handleDelete(_id)} type="submit" className="w-full px-8 py-3 font-semibold text-lg rounded-md focus:bg-blue-50 active:bg-blue-100 hover:text-white text-black hover:bg-red-600 bg-red-200">Delete</button>
                </td>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form onSubmit={handleUpdateUser}>
                            <input onChange={handleInputChange} type="text" name="serviceName" defaultValue={serviceName} placeholder='' />
                            <input onChange={handleInputChange} type="text" name="reviewerName" defaultValue={reviewerName} placeholder='' />
                            <input onChange={handleInputChange} type="text" name="price" defaultValue={price} placeholder='' />
                            <input onChange={handleInputChange} type="text" name="rating" defaultValue={rating} placeholder='' />
                            <button type='submit' className='btn'>Submit</button>
                        </form>
                    </div>
                </div>
            </tr>
        </>
    );
};

export default Review;