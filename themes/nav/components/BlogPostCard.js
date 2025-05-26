import LazyImage from '@/components/LazyImage'
import NotionIcon from './NotionIcon'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import CONFIG from '../config'
import TagItemMini from './TagItemMini'

const BlogPostCard = ({ index, post, showSummary, siteInfo }) => {
  const showPreview =
    siteConfig('HEO_POST_LIST_PREVIEW', null, CONFIG) && post.blockMap
  if (
    post &&
    !post.pageCoverThumbnail &&
    siteConfig('HEO_POST_LIST_COVER_DEFAULT', null, CONFIG)
  ) {
    post.pageCoverThumbnail = siteInfo?.pageCover
  }
  const showPageCover =
    siteConfig('HEO_POST_LIST_COVER', null, CONFIG) &&
    post?.pageCoverThumbnail &&
    !showPreview

  const POST_TWO_COLS = siteConfig('HEO_HOME_POST_TWO_COLS', true, CONFIG)
  const COVER_HOVER_ENLARGE = siteConfig(
    'HEO_POST_LIST_COVER_HOVER_ENLARGE',
    true,
    CONFIG
  )

  // wow fadeInUp border bg-white dark:bg-[#1e1e1e] flex mb-4 flex-col h-[23rem] md:h-52 md:flex-row  group w-full dark:border-gray-600 hover:border-indigo-600  dark:hover:border-yellow-600 duration-300 transition-colors justify-between overflow-hidden rounded-xl  heo最新版本
  // wowfadeInUp border bg-white dark:bg-[#1e1e1e] flex mb-1   h-[9rem] md:h-52 flex-col  group  dark:border-gray-600 hover:border-indigo-600  dark:hover:border-yellow-600 duration-300 transition-colors justify-center overflow-hidden rounded-xl mt
  return (
    <article
      className={` ${COVER_HOVER_ENLARGE} ? ' hover:scale-110 transition-all duration-150' : ''}`}>
      <div
        data-wow-delay='.2s'
        className={
          'wowfadeInUp border bg-white dark:bg-[#1e1e1e] h-[8rem] md:h-[8rem] group dark:border-gray-600 hover:border-indigo-600 dark:hover:border-yellow-600 duration-300 transition-colors justify-center overflow-hidden rounded-xl mt relative'
        }>
        {showPageCover && (
          <Link href={post?.href} passHref legacyBehavior>
            <div
              className={
                ' w-full h-full overflow-hidden cursor-pointer select-none'
              }>
              <LazyImage
                priority={index === 0}
                src={post?.pageCoverThumbnail}
                alt={post?.title}
                className='w-full h-full object-cover group-hover:scale-105 group-hover:brightness-75 transition-all duration-300'
                />
            </div>
          </Link>
        )}

        <div
          className={
            'absolute inset-0 flex flex-col justify-end items-start p-1 z-10 ml-2'
          }>
          <header>
            <Link
              href={post?.href}
              passHref
              className={
                'group-hover:text-indigo-700 dark:hover:text-yellow-700 dark:group-hover:text-yellow-600 text-white'
              }>
              <span className='menu-menu-link text-shadow line-clamp-2 text-xs leading-tight '>{post.title}</span>
            </Link>
          </header>
        </div>
      </div>
    </article>
  )
}

export default BlogPostCard
