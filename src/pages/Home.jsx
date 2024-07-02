import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
import Banner from '../img/banner.jpeg';
import '../styles/HomeStyles.css'

const Home = () => {
  return (
    <Layout>
        <div className="home" style={{backgroundImage: `url(${Banner})`}}>
          <div className="header-container">
            <h1>Food Website</h1>
            <p>Food from all the cusines of the World!</p>
            <Link to="/menu">
              <button>
                ORDER NOW!
              </button>
            </Link>
          </div>
        </div>
    </Layout>
  )
}

export default Home