import { prisma } from "@/prisma";
import Post from "./Post";
import { auth } from "@clerk/nextjs/server";

const Feed = async ({ userProfileId }: { userProfileId: string }) => {
  const { userId } = await auth();

  if (!userId) return;

  const whereCondition = userProfileId
    ? { userId: userProfileId }
    : {
      userId: {
        in: [
          userId,
          ...(
            await prisma.follow.findMany({
              where: { followerId: userId },
              select: { followingId: true }
            })
          ).map((follow) => follow.followingId),
        ],
      },
    };

  console.log(whereCondition)

  const posts = await prisma.post.findMany({ where: whereCondition })

  console.log(posts)

  // FETCH POSTS FROM THE CURRENT USER AND THE FOLLOWINGS
  return (
    <div className="">
      {/* {posts.map(post=>(
        <div key={post.id}>
          <Post/>
        </div>
      ))} */}
    </div>
  );
};

export default Feed;
