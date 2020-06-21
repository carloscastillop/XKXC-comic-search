import Homepage from '../Pages/Homepage';

export async function userCheckLatest(){
    await Homepage.checkComic();
}
