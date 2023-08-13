import { useState, useEffect } from 'react';
import { Category } from '../interfaces';

const useGetPageData = <Data,>(
  getDataFunction: () => Promise<Data>,
  getCategoriesFunction: () => Promise<Category[]>
) => {
  const [data, setData] = useState<Data>();
  const [categories, setCategories] = useState<Category[]>([]);

  const getAllData = async () => {
    const data = await getDataFunction();
    setData(data);
  };
  const getAllCategories = async () => {
    const data = await getCategoriesFunction();
    setCategories(data);
  };

  useEffect(() => {
    getAllData();
    getAllCategories();
  }, []);

  return { data, categories };
};

export default useGetPageData;
