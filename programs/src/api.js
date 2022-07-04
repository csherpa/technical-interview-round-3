export const apiData = async (page) => {
  try{
    const response = await fetch (`https://staging.wherewego.org/api/programs?limit=12&page=${page}`);
    return await response.json();
  }catch(err) {
    console.log(err, 'Api Error')
  }
}