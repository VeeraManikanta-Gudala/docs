import React from 'react'
import Editor from './Editor';
interface DocumentIdPageProps {
  documentId: any;
  // Define any props if neededy
  params: Promise<DocumentIdPageProps>;
}
const DocumentIdPage = async({ params }: DocumentIdPageProps) => {
    const awaitedParams = await params;
    const documentId = awaitedParams.documentId;
  return (
    <div className="min-h-screen bg-[#fafafb] p-4">
      
    <Editor />
    </div>
  )
}

export default DocumentIdPage;