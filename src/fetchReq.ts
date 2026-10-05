interface Post{
    userId: number,
    id:number,
    title: string,
    body: string
}

const fetchData = async() => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if(!response.ok)
        {
            throw new Error(`HTTP Error ${response.status}`);
        }
        const data: Post = await response.json();
        console.log("Posts", data);
        
    } catch (error: any) {
        
    }
}