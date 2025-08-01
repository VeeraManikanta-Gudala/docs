"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const Editor = () => {
    const editor = useEditor({
        extensions: [StarterKit],
        editorProps:{
            attributes:{
                style: "padding-left: 56px, padding-right: 56px",
                class: 'focus:outline-none print:border-0 bg-white border-[#c7c7c7] flex flex col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text'
            }
        }
    });

    return (
        <div className="size-full overflow-x-auto bg-[#F9FAFB] p-4 print:p-0 print:bg-white print:overflow-visible">
            <div className='min-w-max flex justify-center w-[816px] p-4 print:py-0 mx-auto print:w-full print:min-w-0'>
                <EditorContent editor={editor} />
                </div>
        </div>
    )
}
export default Editor;