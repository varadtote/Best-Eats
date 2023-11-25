import React, { useState } from 'react';
import { data } from '../data.js';

const Food = memo(() => {
    // console.log(data);
    const [Foods, setFoods] = useState(data);

    //filter types burger/pizza/salad etc..
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            }),
        );
    };

    // Filter By Price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            }),
        );
    };

    return (
        <div className="max-w-[1640px] m-auto px-4 py-12">
            <h1 className="text-orange-600 font-bold text-4xl text-center">
                Top Rated Menu Items
            </h1>
            {/* Filter Row  */}
            <div className="flex flex-col lg:flex-row justify-around">
                {/* Filter Type  */}
                <div>
                    <p className="font-bold text-gray-700 pb-2">
                        Filter By Type
                    </p>
                    <div className="flex flex-wrap gap-x-2 gap-y-1">
                        <button
                            onClick={() => setFoods(data)}
                            className="border-orange-600 px-3 py-1 text-orange-600 hover:bg-orange-600 hover:text-white"
                        >
                            All
                        </button>
                        <button
                            onClick={() => filterType('burger')}
                            className="border-orange-600 px-3 py-1 text-orange-600 hover:bg-orange-600 hover:text-white"
                        >
                            Burger
                        </button>
                        <button
                            onClick={() => filterType('pizza')}
                            className="border-orange-600 px-3 py-1 text-orange-600 hover:bg-orange-600 hover:text-white"
                        >
                            Pizza
                        </button>
                        <button
                            onClick={() => filterType('salad')}
                            className="border-orange-600 px-3 py-1 text-orange-600 hover:bg-orange-600 hover:text-white"
                        >
                            Salads
                        </button>
                        <button
                            onClick={() => filterType('chicken')}
                            className="border-orange-600 px-3 py-1 text-orange-600 hover:bg-orange-600 hover:text-white"
                        >
                            Chicken
                        </button>
                    </div>
                </div>

                {/* Filter Price  */}
                <div>
                    <p className="font-bold text-gray-700 pb-2">
                        Filter By Price
                    </p>
                    <div className="flex flex-wrap gap-x-2 gap-y-1">
                        <button
                            onClick={() => filterPrice('$')}
                            className="border-black px-3 py-1 text-black hover:bg-orange-600 hover:text-white"
                        >
                            $
                        </button>
                        <button
                            onClick={() => filterPrice('$$')}
                            className="border-black px-3 py-1 text-black hover:bg-orange-600 hover:text-white"
                        >
                            $$
                        </button>
                        <button
                            onClick={() => filterPrice('$$$')}
                            className="border-black px-3 py-1 text-black hover:bg-orange-600 hover:text-white"
                        >
                            $$$
                        </button>
                        <button
                            onClick={() => filterPrice('$$$$')}
                            className="border-black px-3 py-1 text-black hover:bg-orange-600 hover:text-white"
                        >
                            $$$$
                        </button>
                    </div>
                </div>
            </div>

            {/* Display Foods  */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-5">
                {Foods.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="border rounded-lg shadow-lg hover:scale-105 duration-300"
                        >
                            <img
                                className="w-full h-[200px] object-cover rounded-t-lg"
                                src={item.image}
                                alt={item.name}
                                // height={300}
                                // width={300}
                            />
                            <div className="flex justify-between px-2 py-4">
                                <p className="font-bold">{item.name}</p>
                                <p>
                                    <span className="bg-orange-500 text-white rounded-full p-1">
                                        {item.price}
                                    </span>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
});

export default Food;
