'use client';
import { useEffect, useRef } from 'react';

export default function Editor() {
  const editorRef = useRef();

  const format = (command) => {
    document.execCommand(command, false, null);
    editorRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey) {
      if (e.key === 'b') {
        e.preventDefault();
        format('bold');
      }
      if (e.key === 'i') {
        e.preventDefault();
        format('italic');
      }
      if (e.key === 'u') {
        e.preventDefault();
        format('underline');
      }
    }
  };

  useEffect(() => {
    const el = editorRef.current;
    el.addEventListener('keydown', handleKeyDown);
    return () => el.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8 space-y-4">
      <div className="space-x-2">
        <button onClick={() => format('bold')} className="btn">Bold</button>
        <button onClick={() => format('italic')} className="btn">Italic</button>
        <button onClick={() => format('underline')} className="btn">Underline</button>
      </div>

      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        className="w-[210mm] h-[297mm] bg-white shadow-md border border-gray-300 p-12 text-base leading-relaxed outline-none"
      >
        Start writing here...
      </div>
    </div>
  );
}
