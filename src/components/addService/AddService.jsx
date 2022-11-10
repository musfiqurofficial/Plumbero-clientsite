import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddService = () => {

    const handleSubmitAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const details = form.details.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;
        const iconURL = form.iconURL.value;
        console.log(name, details, price, iconURL, photoURL)

        const AddService = {
            name,
            category,
            details,
            price,
            photoURL,
            iconURL
        }

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service Added!')
                    form.reset();
                }
            })
            .catch(error => console.error(error))

    }

    return (
        <div>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                <form onSubmit={handleSubmitAddService} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">

                    <input name="name" type="text" placeholder="Service name" className="w-1/2 mx-auto rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 p-4 dark:border-gray-700 dark:text-gray-900" required />

                    <input name="category" type="text" placeholder="category" className="w-1/2 mx-auto rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 p-4 dark:border-gray-700 dark:text-gray-900" required />

                    <input name="details" type="text" placeholder="Details" className="w-1/2 mx-auto rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 p-4 dark:border-gray-700 dark:text-gray-900" required />
                    <input name="price" type="text" placeholder="Price" className="w-1/2 mx-auto rounded-md p-4 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required />
                    <input name='photoURL' type="text" placeholder="Photo URL" className="w-1/2 mx-auto p-4 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required />
                    <input name='iconURL' type="text" placeholder="Icon URL" className="w-1/2 mx-auto p-4 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required />
                    <input type="submit" className='w-1/2 mx-auto btn' value="Button" />

                </form>
            </section>
            <Toaster></Toaster>
        </div>
    );
};

export default AddService;