import { Children } from "react";

interface DocumentIdPageProps{
    children: React.ReactNode;
}

const DocumentsLayout = ({ children }: DocumentIdPageProps) => {
    return(<>
    <h1>this is nav bar</h1>
    {children}
    

    </>)
}
export default DocumentsLayout;