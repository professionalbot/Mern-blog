import React from 'react'
import { FileInput, Select, TextInput, Button } from 'flowbite-react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
    return (
        <div className='p-3 bg-red-100 max-w-3xl mx-auto min-h-screen   '>
            <h1 className='text-center text-3xl my-7 font-semibold '>Create Post</h1>
            <form className='flex flex-col gap-4'>
                <div className="flex flex-col gap-4 sm:flex-row justify-between ">
                    <TextInput
                        type='text'
                        placeholder='Title'
                        required
                        id='title'
                        className='flex-1'
                    />
                    <Select >
                        <option value='uncategorized'>Select a Category</option>
                        <option value="javascript">JavaScript</option>
                        <option value="reactjs">ReactJs</option>
                        <option value="nextjs">NEXT.JS</option>
                    </Select>
                </div>
                <div className="flex flex-row gap-4 items-center border-4 justify-between border-teal-500 border-dotted p-3">
                    <FileInput type='file' accept='image' acceept='image/*' />
                    <Button type='button' gradientDuoTone='purpleToBlue' size='sm' outline >Upload Image </Button>
                </div>
                <ReactQuill theme='snow' placeholder='Write SomeThing....' className='h-72 mb-12   ' required />
                <Button type='submit' gradientDuoTone='purpleToPink'>
                    Publish
                </Button>
            </form>
        </div>
    )
}