// Search URL
const SEARCH_URL = "https://api.unsplash.com/search/photos?per_page=16";
// const itemsPerPage = "&per_page=12";


// export async function getInitialImages() {
//   const request = await fetch(`${BASE_URL}?per_page=12`,{
//     headers:{
//       "Authorization": `Client-ID ${process.env.VUE_APP_SECRET}`
//     }
//   });
//   const data = await request.json();
//   console.log(data);
// }


export async function getDataBySearch(userInput, page){
  const request = await fetch(`${SEARCH_URL}&query=${userInput}&page=${page}`,{
    headers: {
      "Authorization": `Client-ID ${process.env.VUE_APP_SECRET}`
    }
  });
  const data = await request.json();
  return data;
}
