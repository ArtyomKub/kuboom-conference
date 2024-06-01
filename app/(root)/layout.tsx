import React, {ReactNode} from 'react';
import StreamVideoProvider from '@/providers/StreamClientProvider';
import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'KUBOOM',
    description: 'Video calling app',
    icons: {
        icon: '/icon/logo.svg'
    }
};

const RootLayout = ({children}: { children: ReactNode }) => {
    return (
        <main>
            <StreamVideoProvider>
                {children}
            </StreamVideoProvider>
        </main>
    );
};

export default RootLayout;