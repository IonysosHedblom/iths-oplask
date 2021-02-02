const BASE_URL = "https://api.unsplash.com/photos"

export async function getData(){
  
  const tokenHeader = {
    headers: {
      "Authorization": "Client-ID 7oTFDmKuqqPGu6_RnrCn6aZB8j8VpU19M1Ro5NIG63c" 
    }
  }
  const request = await fetch(`${BASE_URL}`, tokenHeader);
  const data = await request.json() 
  console.log(data);
}
