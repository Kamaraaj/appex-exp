import React, { useEffect, useState } from 'react'
import useHttpService from '../utilities/useHttpService'
import Pagination from '../components/Pagination'
import Header from '../components/Header'
import Products from '../components/Products'
import Shimmer from '../components/Shimmer'

const LandingPage = () => {
    const { get, resData, isLoading } = useHttpService("https://catchyfiveapi.appxes-erp.in")
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(() => {
        get(`/Product/GetAllWithImage?OrganizationId=3&pageNo=${currentPage}&pageSize=10`)
    }, [currentPage])

    return (
        <main className=' bg-[#A7D7C580]'>
            <div>
                <div className='mb-2'>
                    <Header />
                </div>
                <section className=' py-6 px-8'>

                    {(isLoading) ? (<div className='h-screen'><Shimmer /></div>) : (
                        <div className=' py-6 px-8'>
                            <Products resData={resData} />
                            {
                                resData?.Result?.length > 0 &&
                                <div className='pt-6 flex justify-end'>
                                    <Pagination TotalNumberOfRecords={resData?.TotalNumberOfRecords} currentPage={currentPage} setCurrentPage={setCurrentPage} perPageRecordsLimit={10} visiblePages={5} />
                                </div>
                            }
                        </div>
                    )
                    }
                </section>

            </div>

        </main>
    )
}

export default LandingPage
