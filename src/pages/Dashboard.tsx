import React from 'react'

import Cards from 'src/components/dashboard/cards/Cards';
import PageTitle from 'src/components/core/PageTitle';
import Charts from 'src/components/dashboard/charts/Charts';
import TopCollections from 'src/components/dashboard/topCollections/TopCollections';

const Dashboard = () => {

    return (
            <div className="content">

                <div className="container-fluid">

                    <PageTitle title="Dashboard" />
                    {/* Cards */}
                
                    <Cards />
                    
                    {/* Charts */}
                    
                    <Charts />

                    {/* Top Collections */}

                    <TopCollections />

                </div>
            </div>
           
    )
}

export default Dashboard