import React, { createContext, useContext, useEffect, useState } from 'react';
import { getPortfolioData } from '../Services/api';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const data = await getPortfolioData();
        setPortfolio(data);
      } catch (error) {
        console.error('❌ Failed to fetch portfolio data:', error);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <PortfolioContext.Provider value={{ portfolio}}>
      {children}
    </PortfolioContext.Provider>
  );
};

// Custom hook for easy access
export const usePortfolio = () => useContext(PortfolioContext);
