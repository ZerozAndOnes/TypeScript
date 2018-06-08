// Extend the Post interface and add an optional type paramter
interface OptionalTitlePost extends Post {
    title: string;
    
    type?: string; //Can be overridden and made compulsory be a descendant 
}