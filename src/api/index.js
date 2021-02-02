const BASE_URL = "https://api.unsplash.com/photos/";

export async function getInitialImages() {
  const request = await fetch(`${BASE_URL}?per_page=12`,{
    headers:{
      "Authorization": `Client-ID ${process.env.VUE_APP_SECRET}`
    }
  });
  const data = await request.json();
  console.log(data);
}


export async function getDataBySearch(userInput){
  const request = await fetch(`${BASE_URL}?query=${userInput}`,{
    headers: {
      "Authorization": `Client-ID ${process.env.VUE_APP_SECRET}`
    }
  });
  const data = await request.json();
  console.log(data);
}
