import React from 'react'
import { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './component.css'


const Express = () => {
    const [editorContent, setEditorContent] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const quillRef = useRef(null);

    const handleChange = (content) => {
        setEditorContent(content);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('🦄 Published a Post!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        setEditorContent('')
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition="Bounce" />
            <ToastContainer />
            <div className="min-h-[88vh] bg-gray-100 flex flex-col items-center justify-center">
                <div className="container mx-auto">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-center mb-6">Compose a Post</h2>
                        <div className="mb-4">
                            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
                                Upload Image
                            </label>
                            <div className="relative overflow-hidden">
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="absolute inset-[8px] w-16 opacity-0 cursor-pointer express-img"
                                />
                                <button className="cursor-pointer bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded-md focus:outline-none focus:shadow-outline transition duration-200 ease-in-out">
                                    Pick Img
                                </button>
                            </div>
                            {selectedImage && (
                                <div className="mt-4">
                                    <img src={selectedImage} alt="Selected" className="max-w-full h-auto rounded-lg shadow-md" />
                                </div>
                            )}
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
                                    Content
                                </label>
                                <ReactQuill
                                    value={editorContent}
                                    onChange={handleChange}
                                    ref={quillRef}
                                    modules={{
                                        toolbar: [
                                            [{ header: '1' }, { header: '2' }, { font: [] }],
                                            [{ list: 'ordered' }, { list: 'bullet' }],
                                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                            ['link', 'image', 'video'],
                                            [{ align: [] }],
                                            [{ color: [] }, { background: [] }],
                                            ['clean'],
                                        ],
                                    }}
                                    formats={[
                                        'header',
                                        'font',
                                        'size',
                                        'bold',
                                        'italic',
                                        'underline',
                                        'strike',
                                        'blockquote',
                                        'list',
                                        'bullet',
                                        'link',
                                        'image',
                                        'video',
                                        'color',
                                        'background',
                                        'align',
                                    ]}
                                    className="bg-white rounded-lg shadow-md"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    type="submit"
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
                                > <lord-icon
                                    style={{ "width": "25px", "height": "25px", "paddingTop": "7px", "marginRight": "5px" }}
                                    src="https://cdn.lordicon.com/jgnvfzqg.json"
                                    trigger="hover"
                                ></lord-icon>
                                    Publish Post
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Express