import React from 'react';
import { Modal, Form, Input } from 'antd';

interface EditBookModalProps {
    visible: boolean;
    onCancel: () => void;
    onOk: () => void;
    form: any;
}

const UpdateBookModal = ({ visible, onCancel, onOk, form }: EditBookModalProps) => {
    return (
        <Modal
            title="Edit Book"
            open={visible}
            onCancel={onCancel}
            onOk={onOk}
        >
            <Form form={form} layout="vertical">
                <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter book name' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="category" label="Category" rules={[{ required: true, message: 'Please enter category' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="author" label="Author" rules={[{ required: true, message: 'Please enter author' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter description' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="production_year" label="Production Year" rules={[{ required: true, message: 'Please enter production year' }]}>
                    <Input type="number" />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default UpdateBookModal;
