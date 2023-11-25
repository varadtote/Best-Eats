import React from 'react';

const HeadlineCards = memo(() => {
    return (
        // Card Conatiner
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
            {/* Card  */}
            <div className="rounded-xl relative">
                {/* Card Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">
                        Sun's Out, BOGO's Out
                    </p>
                    <p className="px-2">Through 8/26</p>
                    <button className="border-white text-white mx-2 absolute bottom-4">
                        Order Now
                    </button>
                </div>
                <img
                    className="max-h-[160px] w-full object-cover pos rounded-xl md:max-h-[200px]"
                    src="https://images.unsplash.com/photo-1593584785033-9c7604d0863f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxmb29kfGVufDB8fDB8fHww"
                    alt=""
                />
            </div>
            <div className="rounded-xl relative">
                {/* Card Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">
                        New Restaurant's
                    </p>
                    <p className="px-2">Added Daily</p>
                    <button className="border-white text-white mx-2 absolute bottom-4">
                        Order Now
                    </button>
                </div>
                <img
                    className="max-h-[160px] w-full object-cover pos rounded-xl md:max-h-[200px]"
                    src="https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
            </div>
            <div className="rounded-xl relative">
                {/* Card Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">
                        We Deliver Desert's Too
                    </p>
                    <p className="px-2">Tasty Treats</p>
                    <button className="border-white text-white mx-2 absolute bottom-4">
                        Order Now
                    </button>
                </div>
                <img
                    className="max-h-[160px] w-full object-cover pos rounded-xl md:max-h-[200px]"
                    src="https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                />
            </div>
        </div>
    );
});

export default HeadlineCards;
