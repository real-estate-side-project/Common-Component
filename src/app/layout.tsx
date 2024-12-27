import { ModalProvider } from '@/providers/ModalProvider';
import { ToastProvider } from '@/providers/ToastProvider';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import BackButtons from './_components/BackButtons';
import './globals.css';

const pretendard = localFont({
    src: '../fonts/PretendardVariable.woff2',
    display: 'swap',
    weight: '45 920',
    variable: '--font-pretendard'
});

export const metadata: Metadata = {
    title: 'StayLinker Common Components',
    description: 'Developer-friendly common components for rapid application development.'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${pretendard.variable} font-pretendard`}>
                <ToastProvider>
                    <ModalProvider>
                        <BackButtons />
                        {children}
                    </ModalProvider>
                </ToastProvider>
            </body>
        </html>
    );
}
