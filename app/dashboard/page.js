'use client'
import Sidebar from '@/components/Sidebar'
import ScraperBlock from '@/pagecomponents/ScraperBlock'
import '@/styles/Dashboard.css'
import ScrapeHistoryCard from '@/components/ScrapeHistoryCard'
import { useEffect, useState } from 'react'
// import useAuthGuard from '@/hooks/useAuthCard'

export default function DashboardPage() {

  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("scrapeHistory") || "[]");
    setHistory(stored.reverse());
  }, []);
  
  return (
    <div className="dashboard-container">
    <div className='snowflake' ></div>
    <div className='snowflake' ></div>
    <div className='snowflake' ></div>
    <div className='snowflake' ></div>
    <div className='snowflake' ></div>
    <div className='snowflake' ></div>
    <div className='snowflake' ></div>
    <div className='snowflake' ></div>
    <div className='snowflake' ></div>
    <div className='snowflake' ></div>
    <div className='snowflake' ></div>
    <div className='snowflake' ></div>
      <Sidebar />
      <main className="dashboard-main">
        <div className="dashboard-overlay" />
        <h1 className="dashboard-head">Welcome to your Dashboard ❄️</h1>
        <p className="dashboard-subtext">This is where scraped content will show.</p>
        <hr className='hrline' />
        <ScraperBlock />
        <hr className='hrline' />
      </main>
    </div>
  )
}
