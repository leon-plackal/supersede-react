import BaseLayout from "../components/BaseLayout";
import PostCard from "../components/cards/PostCard";

export default function SavedPostsPage(){
    return(
       <BaseLayout>
           <h1 className='text-3xl font-semibold mb-4 text-lTextPrimary dark:text-dTextPrimary'>Saved Posts</h1>
           <PostCard>

           </PostCard>
       </BaseLayout>
    )
}