import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import useTitle from '../../../hooks/useTitle';


const Category = () => {
    const categoryNews = useLoaderData();
    useTitle('All-News')
    return (
        <div className='mt-2'>
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)

            }
        </div>
    );
};

export default Category;