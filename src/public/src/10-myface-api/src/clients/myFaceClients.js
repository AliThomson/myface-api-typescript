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

export async function getUsers(pageNumber, pageSize) {

    const url = `http://localhost:3001/users?${
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
export async function createPost(message, imageUrl) {
    const url = `http://localhost:3001/posts/create`;
    const requestBody = {
        message: message,
        imageUrl: imageUrl
    }
    const response = await fetch(
        url,
        {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(requestBody)
        }
    );
    if (!response.ok) {
        throw new Error ("Could not create post");
    }
}