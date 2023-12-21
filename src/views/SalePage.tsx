import React from 'react';
import { PostCard } from '../components';
import { salesPosts } from '../assets/constansts';


interface SalePageProps {
  // Add your component's props here
}

const SalePage: React.FC<SalePageProps> = (props) => {
  return (
    <div>
      <PostCard data={salesPosts} type="sale"/>
    </div>
  );
};

export default SalePage;