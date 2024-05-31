'use client'
import React from 'react';
import {useUser} from '@clerk/nextjs';
import {StreamCall, StreamTheme} from '@stream-io/video-react-sdk';

const Meeting = ({params}: { params: { id: string } }) => {

    const {user, isLoaded} = useUser();

    return (
        <main className="h-screen w-full">
            <StreamCall>
                <StreamTheme>

                </StreamTheme>
            </StreamCall>
        </main>
    );
};

export default Meeting;