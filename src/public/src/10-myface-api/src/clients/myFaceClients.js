export async function getPosts(pageNumber, pageSize) {

    const url = `http://localhost:3001/posts?${
        pageNumber 
        ? `page=${pageNumber}`
        : ""
    }&${
        pageSize
        ? `pageSize=${pageSize}`
        :""
    }`
    const response = await fetch(url);
    return await response.json();

    

}