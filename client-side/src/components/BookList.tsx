'use client';

import React, { useEffect, useState } from 'react';
import { Spin, Button, Form, notification } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getAllBooks, addBook, deleteBookById, updateBookById } from '@/store/actions/bookActions';
import { useAppDispatch, useAppSelector } from '@/store/store';

import UpdateBookModal from './UpdateBookModal';
import AddBookModal from './AddBookModal';
import CardBook from './CardBook';
import { Book } from '@/models';

const BookList = () => {
    const dispatch = useAppDispatch();
    const books = useAppSelector(state => state.books.books);
    const isLoading = useAppSelector(state => state.books.isLoading);

    const [modalType, setModalType] = useState<string>('add');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedBook, setSelectedBook] = useState<any>(null);
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        if (!books.length)
            dispatch(getAllBooks());
    }, []);

    const openNotification = (message: string) => {
        api.info({
            message: message,
            placement: 'bottomRight'
        });
    };

    const handleAddBook = () => {
        form.validateFields().then(values => {
            const updatedBook = { ...values };
            updatedBook.production_year = parseInt(updatedBook.production_year);

            dispatch(addBook(updatedBook));

            form.resetFields();
            setModalVisible(false);
            openNotification('Book added successfully');
        });
    };

    const handleDeleteBook = (id: number) => {
        dispatch(deleteBookById(id));
        openNotification('Book deleted successfully');
    };

    const handleUpdateBook = () => {
        form.validateFields().then(values => {
            const updatedBook = { ...values, id: selectedBook.id };
            updatedBook.production_year = parseInt(updatedBook.production_year);

            dispatch(updateBookById(updatedBook));
            setModalVisible(false);
            openNotification('Book updated successfully');
        });
    };

    const openModal = (book: any, type: string) => {
        setSelectedBook(book);
        setModalType(type);
        setModalVisible(true);
        if (type === 'update') {
            form.setFieldsValue(book);
        } else {
            form.resetFields();
        }
    };

    const closeModal = () => {
        setModalVisible(false);
        form.resetFields();
    };

    return (
        <div className='flex flex-col gap-2 items-center'>
            {contextHolder}
            <Button type="primary" onClick={() => openModal(null, 'add')} icon={<PlusOutlined />}>Add Book</Button>
            {isLoading ? <Spin /> : (
                <ul className='flex max-w-[800px] gap-2 flex-wrap justify-between'>
                    {books.map(book => (
                        <li key={book.id}>
                            <CardBook book={book} onDelete={handleDeleteBook} onEdit={() => openModal(book, 'update')} />
                        </li>
                    ))}
                </ul>
            )}
            {modalType === 'update' ? (
                <UpdateBookModal
                    visible={modalVisible}
                    onCancel={closeModal}
                    onOk={handleUpdateBook}
                    form={form}
                />
            ) : (
                <AddBookModal
                    visible={modalVisible}
                    onCancel={closeModal}
                    onOk={handleAddBook}
                    form={form}
                />
            )}
        </div>
    );
}

export default BookList;
