import { ReactElement, useState } from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { RootState } from '@/common/redux/store';
import Header from '@/pages/blog/page/components/Header'
import Footer from '@/pages/blog/page/components/Footer'
import Sidebar from '@/pages/blog/page/components/Sidebar'
import SignInModal from '@/common/components/SignInModal';

import('@/pages/blog/page/css/font.css');
import('@/pages/blog/page/css/scrollbar.css');

interface LayoutProps {
    children?: ReactElement | ReactElement[],
    className?: string
}

const Layout = (props: LayoutProps) => {
    const [showSidebar, setShowSidebar] = useState<string>('');
    const { bannerImageUrl, bannerTitle } = useSelector((state: RootState) => state.banner);

    return (<>
        <SignInModal />

        <div className={`bg-white dark:bg-gray-900 min-h-screen h-auto font-['Noto_Sans_KR']
            flex flex-col justify-between ${props.className}`}>

            <Sidebar show={showSidebar} setShowSidebar={setShowSidebar} />
            <Header show={showSidebar} setShowSidebar={setShowSidebar} />

            {/* Page Header Image */}
            <div className='bg-fixed h-[75vh] bg-center' style={{
                backgroundImage: `url(${bannerImageUrl})`
            }}>
                <span className='absolute bottom-[60%] right-[50%] translate-y-[60%] translate-x-[50%]
                    text-white text-3xl text-pretty text-center'>
                    {bannerTitle}
                </span>
                <span className='absolute top-[65px] right-[5px] text-white text-lg '>
                    😁 항상 &#160;<span className='bg-yellow-400 bg-opacity-60'>화이팅</span>
                </span>
            </div>

            {/* Content body */}
            <div className='mb-auto bg-slate-50'>
                {props.children ? props.children : <Outlet />}
            </div>

            <Footer />

        </div>
    </>
    )
}

export default Layout;