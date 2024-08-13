import React from 'react';

const SubNavbar = () => {
    return (
        <div className="subnavbar flex items-center justify-evenly h-20 bg-black text-white m-3 rounded-3xl font-jost text-xl overflow-hidden">
            <div className='hover:text-black hover:bg-neutral-200 w-1/4 h-20 flex justify-center items-center'>About</div>
            <div className='hover:text-black hover:bg-neutral-200 w-1/4 h-20 flex justify-center items-center'>Upcoming Events</div>
            <div className='hover:text-black hover:bg-neutral-200 w-1/4 h-20 flex justify-center items-center'>Past Events</div>
            <div className='hover:text-black hover:bg-neutral-200 w-1/4 h-20 flex justify-center items-center'>Organizers</div>
            <div className='hover:text-black hover:bg-neutral-200 w-1/4 h-20 flex justify-center items-center'>Photos</div>
            <div className='hover:text-black hover:bg-neutral-200 w-1/4 h-20 flex justify-center items-center'>Videos</div>
   
        </div>
    );
};

export default SubNavbar;