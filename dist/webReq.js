import axios, {} from "axios";
const fetchData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        console.log("Posts", response.data);
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("Axios error", error.message);
            if (error.response) {
                console.log(error.response.status);
            }
        }
    }
};
fetchData();
// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }
//# sourceMappingURL=webReq.js.map