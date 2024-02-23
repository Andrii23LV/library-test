'use client'

import { useEffect, useMemo, useState } from 'react';
import BookApiService from '@/api';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { Button, Descriptions, DescriptionsProps, Form, Spin, notification, Upload } from 'antd';
import { ReadOutlined } from '@ant-design/icons';
import UpdateBookModal from '@/components/UpdateBookModal';
import { getAllBooks, updateBookById } from '@/store/actions/bookActions';
import ImageUploader from '@/components/ImageUploader';

const bookApiService = new BookApiService();

const BookById = ({ params }: { params: { id: string } }) => {
    const dispatch = useAppDispatch();

    const id = useMemo(() => parseInt(params?.id), [params?.id]);

    const [modalVisible, setModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();

    const book = useAppSelector(state => state.books.books.find(book => book.id === id));
    const books = useAppSelector(state => state.books.books);

    const items: DescriptionsProps['items'] = useMemo(() => [
        {
            key: '1',
            label: 'Author',
            children: book?.author,
        },
        {
            key: '2',
            label: 'Category',
            children: book?.category
        },
        {
            key: '3',
            label: 'Production Year',
            children: book?.production_year
        },
        {
            key: '4',
            label: 'Description',
            children: book?.description
        },
    ], [book]);


    const openNotification = (message: string) => {
        api.info({
            message: message,
            placement: 'bottomRight'
        });
    };

    const handleUpdateBook = () => {
        form.validateFields().then(values => {
            const updatedBook = { ...values, id: book?.id };
            updatedBook.production_year = parseInt(updatedBook.production_year);

            dispatch(updateBookById(updatedBook));
            setModalVisible(false);
            openNotification('Book updated successfully');
        });
    };

    const openModal = () => {
        setModalVisible(true);
        form.setFieldsValue(book);
    };

    const closeModal = () => {
        setModalVisible(false);
        form.resetFields();
    };

    useEffect(() => {
        if (id !== undefined && !book && !books.length) {
            dispatch(getAllBooks());
        }
    }, [id, book]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-start p-24 w-[90vw] max-w-[1200px] mx-auto" >
            {contextHolder}
            {book ? (
                <>
                    <ImageUploader book={book} />
                    <Descriptions bordered title={<h1><ReadOutlined /> <span className='ml-2'>{book.name}</span></h1>} items={items} extra={<Button type="primary" onClick={openModal}>Edit</Button>} />
                </>
            ) : <Spin />}

            <UpdateBookModal
                visible={modalVisible}
                onCancel={closeModal}
                onOk={handleUpdateBook}
                form={form}
            />
        </div >
    );
};

export default BookById;
