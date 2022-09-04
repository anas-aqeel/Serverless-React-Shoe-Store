import * as React from 'react';
import NavbarSkeleton from '../Navbar/NavbarSkeleton';
import CardSkeleton from '../Card/CardSkeleton';

const LoadingPage = () => {
    return (
        <>
            <NavbarSkeleton/>
            <CardSkeleton/>
        </>

    )
}


export default LoadingPage