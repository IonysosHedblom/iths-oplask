const BASE_URL = "https://api.unsplash.com/photos?per_page=12"


export async function getData(){
 const request = await fetch(BASE_URL,{
   headers:{
     "Authorization": `Client_ID ${process.env.VUE_SECRET}` 
   }
 })
 const data = await request.json() 
 console.log(data);
}
