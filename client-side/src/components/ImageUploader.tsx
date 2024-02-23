import React, { useState, useRef } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Image, notification } from 'antd';
import { useAppDispatch } from '@/store/store';
import { updateBookImageById } from '@/store/actions/bookActions';
import { Book } from '@/models';

interface ImageUploaderProps {
    book: Partial<Book>;
}

const ImageUploader = ({ book }: ImageUploaderProps) => {
    const dispatch = useAppDispatch();
    const [api, contextHolder] = notification.useNotification();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [loading, setLoading] = useState(false);
    const [fileData, setFileData] = useState<File | null>(null);

    const uploadButton = (
        <button className='border border-zinc-300 rounded-lg p-2 hover:border-sky-400 hover:text-sky-400 ease-in duration-100' type="button" onClick={() => fileInputRef.current?.click()}>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload image</div>
        </button>
    );

    const openNotification = (message: string) => {
        api.info({
            message: message,
            placement: 'bottomRight'
        });
    };


    const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            setFileData(selectedFile);

            setLoading(true);

            const updatedObj = { ...book, image: selectedFile };
            dispatch(updateBookImageById(updatedObj));

            openNotification('Image updated successfully');

            setLoading(false);
        }
    };

    return (
        <div>
            {contextHolder}
            <input type="file" ref={fileInputRef} onChange={fileChangeHandler} style={{ display: 'none' }} />
            {book?.image_url ?
                <Image src={book.image_url} alt="avatar" className='w-full max-w-[350px] rounded shadow-md cursor-pointer hover:shadow-2xl ease-in duration-100' preview={false} onClick={() => fileInputRef.current?.click()} /> : uploadButton
            }
        </div>
    );
};

export default ImageUploader;
