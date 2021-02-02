export async function getData(){
  const request = await fetch(BASE_URL,{
   
  })
  const data = await request.json() 
  console.log(data);
 }
 