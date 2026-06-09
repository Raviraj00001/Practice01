import React from 'react';
const Card=(props)=>{
        
    return(
        <div class="w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    
    <img
        src={props.photo.download_url}
        alt="Project"
        class="w-full h-48 object-cover"
    />

    <div class="p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-2">
            Project Title
        </h2>

        <p class="text-gray-600 mb-4">
            A beautiful card built with Tailwind CSS. Perfect for portfolios and project showcases.
        </p>

        <div class="flex justify-between items-center">
            <a href="#" class="text-blue-600 hover:underline  font-semibold text-decoration:none" download>
               <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" >
                    download
                </button>
            </a>
        </div>
    </div>

</div>
    )
}
export default Card;