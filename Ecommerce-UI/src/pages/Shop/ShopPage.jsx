import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import Directory from '../../components/Directory/directory';
import ShopSideBar from '../../components/ShopSideBar/ShopSideBar'
import ShopProducts from '../../components/Products/ShopProducts';

const ShopPage = () => {
    return (
        <>
            <header>
                <Header page="Shop" />
            </header>
            <main>
                <div className="container flex flex-col" style={{ maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>
                    < Directory directory={['Home', 'Catalog', 'SmartPhones']} />
                    <div className="content flex justify-between gap-10">
                        <ShopSideBar />
                        <ShopProducts />
                    </div>
                </div>
            </main >
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default ShopPage