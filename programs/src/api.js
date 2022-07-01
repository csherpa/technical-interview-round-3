export const apiData = async () => {
  try{
    const response = await fetch ("https://staging.wherewego.org/api/programs");
    return await response.json();
  }catch(err) {
    console.log(err, 'Api Error')
  }
}