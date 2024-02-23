// CardBook.tsx

import React from 'react';
import { Card, Image, Modal, Space, Typography } from 'antd';
const { Text, Link } = Typography;

import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

import { ExclamationCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

import MockIcon from '../../public/mock.jpg';

const { confirm } = Modal;

interface CardBookProps {
    book: {
        id: number;
        name: string;
        author: string;
        category: string;
        production_year: number;
        description: string;
        image_url?: string;
    };
    onDelete: (id: number) => void;
    onEdit: (book: any) => void;
}

const CardBook: React.FC<CardBookProps> = ({ book, onDelete, onEdit }) => {
    const showDeleteConfirm = () => {
        confirm({
            title: 'Are you sure you want to delete this book?',
            icon: <ExclamationCircleOutlined />,
            content: 'This action cannot be undone.',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                onDelete(book.id);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Read description',
            children: <p>{book.description}</p>,
        },
    ];

    return (
        <Card
            title={<Link href={`/book/${book.id}`}>{book.name}</Link>}
            actions={[
                <EditOutlined key="edit" onClick={() => onEdit(book)} />,
                <DeleteOutlined key="delete" onClick={showDeleteConfirm} />,
            ]} className='min-w-[235px]'>
            <Space direction="vertical">
                <Image src={book.image_url || MockIcon.src} alt="avatar" className='object-cover w-[200px] min-h-[200px] max-h-[200px] max-w-[200px] rounded shadow-md' preview={false} />

                <Collapse ghost items={items} />

                <Text italic>Authored by: {book.author}</Text>
                <Text type="secondary">{book.production_year}</Text>
            </Space>
        </Card>
    );
}

export default CardBook;
