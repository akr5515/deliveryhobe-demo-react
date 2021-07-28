import React from 'react';

import TopHeader from '../../components/top-header/top-header.component';
import Header from '../../components/header/header.component';
import SearchBar from '../../components/search-bar/search-bar.component';
import Banner from '../../components/banner/banner.component';
import Directory from '../../components/directory/directory.component';
import Footer from '../../components/footer-main/footer-main.component';

import './homepage.styles.css';

const HomePage=()=>{
    return(<div className='main-container'>
        <TopHeader />
        <Header />
        <SearchBar />
        <Banner />
        <Directory />
        <Footer />
    </div>);
}

export default HomePage;