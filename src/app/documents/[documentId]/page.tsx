import React from 'react'

interface DocumentIdPageProps {
  documentId: any;
  // Define any props if neededy
  params: Promise<DocumentIdPageProps>;
}
const DocumentIdPage = async({ params }: DocumentIdPageProps) => {
    const awaitedParams = await params;
    const documentId = awaitedParams.documentId;
  return (
    <div>DocumentId: {documentId}</div>
  )
}

export default DocumentIdPage;