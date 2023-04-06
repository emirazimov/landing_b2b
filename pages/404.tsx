import React from 'react';
import { useRouter } from 'next/router';

//Components
import Header from '@/app/Layout/components/Header';
import ContactUsModal from '@/app/Layout/components/ContactUsModal';
import Footer from '@/app/Layout/components/Footer';

//UI
import { Button } from '@/app/UI';

const Page404 = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/")
    };

    return (
        <>
            <Header />
            <main
                className={`
                min-h-screen flex justify-center bg-no-repeat bg-cover bg-center
                `}
                style={{ backgroundImage: "url(/images/404.png)" }}
            >
                <div className="max-w-full w-[1440px] px-[20px] m-auto text-white text-center">
                    <h1 className='font-black text-[50px]'>404</h1>
                    <h2 className='font-black text-[24px]'>Page not found</h2>
                    <p className='opacity-50 text-[18px]'>We couldn’t find the page you’re looking for</p>
                    <Button className='py-[10px] px-[30px] bg-[#4D4DE0] rounded-[30px] mt-[40px]' onClick={handleClick}>
                        <span className='text-[16px]'>Back to home</span>
                    </Button>   
                </div>
                <ContactUsModal />
            </main>
            <Footer />
        </>
    );
};

export default Page404;