'use client'

import { Inter } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const LayoutProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <Layout>
            <Header>
                <Navbar />
            </Header>
            <Content>

                {children}

            </Content>
            <Footer style={{ textAlign: 'center' }}>Book library. All rights reserved 2024.</Footer>
        </Layout>
    );
}