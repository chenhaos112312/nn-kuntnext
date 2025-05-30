import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import BlogPostCard from './BlogPostCard'
import BlogPostListEmpty from './BlogPostListEmpty'
import PaginationNumber from './PaginationNumber'
import { GalgameCard } from './Card'

/**
 * 文章列表分页表格
 * @param page 当前页
 * @param posts 所有文章
 * @param tags 所有标签
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostListPage = ({ page = 1, posts = [], postCount, siteInfo }) => {
  const { NOTION_CONFIG } = useGlobal()
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', 12, NOTION_CONFIG)
  const totalPage = Math.ceil(postCount / POSTS_PER_PAGE)
  const showPagination = postCount >= POSTS_PER_PAGE
  const POST_TWO_COLS = siteConfig('HEO_HOME_POST_TWO_COLS', true, CONFIG)
  if (!posts || posts.length === 0 || page > totalPage) {
    return <BlogPostListEmpty />
  } else {
    return (
    
      <div id='container' className='w-full'>
        <section className="space-y-6">
                {/* <div className="flex items-center space-x-4">
                  <h2 className="text-lg font-bold sm:text-2xl">最新 Galgame</h2>
                  <Button
                    variant="light"
                    as={Link}
                    color="primary"
                    endContent={<ChevronRight className="size-4" />}
                    href="/galgame"
                  >
                    查看更多
                  </Button>
                </div> */}
                <div className="grid grid-cols-2 gap-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
                  {/* {galgames.map((galgame) => (
                    <GalgameCard key={galgame.id} patch={galgame} />
                  ))} */}
                  {posts?.map(post => (
                    <BlogPostCard
                      index={posts.indexOf(post)}
                      key={post.id}
                      post={post}
                      siteInfo={siteInfo}
                    />
                  ))}
                  
                </div>
              </section>

        {/* 文章列表 */}
        {/* <div
          className={`${POST_TWO_COLS && '2xl:grid 2xl:grid-cols-2'} grid-cols-1 gap-5`}>
          {posts?.map(post => (
            <BlogPostCard
              index={posts.indexOf(post)}
              key={post.id}
              post={post}
              siteInfo={siteInfo}
            />
          ))}
        </div> */}

        {showPagination && (
          <PaginationNumber page={page} totalPage={totalPage} />
        )}
      </div>
    )
  }
}

export default BlogPostListPage
