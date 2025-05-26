// import { ArrowRightCircle } from '@/components/HeroIcons'
// import LazyImage from '@/components/LazyImage'
// import { siteConfig } from '@/lib/config'
// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import { useState } from 'react'
// import CONFIG from '../config'
// import Announcement from './Announcement'
// import Card from './Card'

import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import { Card, CardBody } from '@nextui-org/card'
import { Chip } from '@nextui-org/chip'
import { Sparkles } from 'lucide-react'
import { Discord } from './Discord.tsx'
import { RandomGalgameButton } from './RandomGalgameButton'
import { KunHomeNavigationItems } from './NavigationItems.tsx'
import { getKunPosts } from './mdx'
import { KunCarousel } from './KunCarousel'

/**
 * 社交信息卡
 * @param {*} props
 * @returns
 */
const HomeHero = props =>{
  // const { siteInfo, notice } = props
  // const router = useRouter()
  // 在文章详情页特殊处理
  // const isSlugPage = router.pathname.indexOf('/[prefix]') === 0
  // const url1 = siteConfig('HEO_INFO_CARD_URL1', null, CONFIG)
  // const icon1 = siteConfig('HEO_INFO_CARD_ICON1', null, CONFIG)
  // const url2 = siteConfig('HEO_INFO_CARD_URL2', null, CONFIG)
  // const icon2 = siteConfig('HEO_INFO_CARD_ICON2', null, CONFIG)
   console.log(Button,"------------------")
     const posts = getKunPosts()
     console.log(posts,"----------posts---------")
   return (
     <div
      id='hero-wrapper'
      className='recent-top-post-group w-full overflow-hidden select-none px-5 mb-4'>
      <div
        id='hero'
        style={{ zIndex: 1 }}
        className={`${false ? 'xl:flex-row-reverse' : ''}
           recent-post-top rounded-[12px] 2xl:px-5 recent-top-post-group max-w-[86rem] overflow-x-scroll w-full mx-auto flex-row flex-nowrap flex relative`}>
        {/* 左侧banner组 */}
        <BannerGroup {...props} />

        {/* 中间留白 */}
        <div className='px-1.5 h-full'></div>

        {/* 右侧置顶文章组 */}
        {/* <TopGroup {...props} /> */}
        {/* <KunCarousel posts={posts} /> */}

      </div>
    </div>

      // <div className="w-full mx-auto">
      //   <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-6 min-h-[300px]">
      //     <div className="flex-col justify-center hidden space-y-2 sm:flex sm:space-y-6">
      //       <Card className="h-full border-none bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-success-500/20">
      //         <CardBody className="flex justify-between">
      //           <div className="flex items-center gap-2">
      //             <Sparkles className="w-5 h-5 text-primary-500" />
      //             <Chip color="primary" variant="flat">
      //               欢迎来到 TouchGal
      //             </Chip>
      //           </div>
  
      //           <div className="space-y-4">
      //             <h1 className="py-1 text-3xl font-bold text-transparent xl:text-4xl bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text">
      //               一站式 Galgame 文化社区！
      //             </h1>
      //             <p className="text-md text-default-600">
      //               免费, 高质量的 Galgame 资源下载站
      //             </p>
      //           </div>
  
      //           <div className="flex items-center gap-2">
      //             <RandomGalgameButton color="primary" variant="solid">
      //               随机一部游戏
      //             </RandomGalgameButton>
      //             <Button
      //               isIconOnly
      //               isExternal
      //               as={Link}
      //               variant="flat"
      //               color="secondary"
      //             >
      //               <Discord />
      //             </Button>
      //           </div>
      //         </CardBody>
      //       </Card>
  
      //       <div className="grid grid-cols-3 gap-3 sm:gap-6">
      //         <KunHomeNavigationItems buttonSize="lg" />
      //       </div>
      //     </div>
  
      //     <KunCarousel posts={posts} />
      //   </div>
      // </div>
     
    )
}

/**
 * 英雄区左侧banner组
 * @returns
 */
function BannerGroup(props) {
  const posts = getKunPosts()
  return (
    // 左侧英雄区
    // <div
    //   id='bannerGroup'
    //   className='flex flex-col justify-between flex-1 mr-2 max-w-[42rem]'>
    //   {/* 动图 */}
    //   <Banner {...props} />
    //   {/* 导航分类 */}
    //   <GroupMenu />
    // </div>
     <div className="w-full mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-6 min-h-[300px]">
          <div className="flex-col justify-center hidden space-y-2 sm:flex sm:space-y-6">
            <Card className="h-full border-none bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-success-500/20">
              <CardBody className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary-500" />
                  <Chip color="primary" variant="flat">
                    欢迎来到 TouchGal
                  </Chip>
                </div>
  
                <div className="space-y-4">
                  <h1 className="py-1 text-3xl font-bold text-transparent xl:text-4xl bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text">
                    一站式 Galgame 文化社区！
                  </h1>
                  <p className="text-md text-default-600">
                    免费, 高质量的 Galgame 资源下载站
                  </p>
                </div>
  
                <div className="flex items-center gap-2">
                  <RandomGalgameButton color="primary" variant="solid">
                    随机一部游戏
                  </RandomGalgameButton>
                  <Button
                    isIconOnly
                    isExternal
                    as={Link}
                    variant="flat"
                    color="secondary"
                  >
                    <Discord />
                  </Button>
                </div>
              </CardBody>
            </Card>
  
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              <KunHomeNavigationItems buttonSize="lg" />
            </div>
          </div>
  
          <KunCarousel posts={posts} />
        </div>
      </div>
  )
}

/**
 * 置顶文章区域
 */
function TopGroup(props) {
  // const { latestPosts, allNavPages, siteInfo } = props
  // const { locale } = useGlobal()
  // const todayCardRef = useRef()
  // function handleMouseLeave() {
  //   todayCardRef.current.coverUp()
  // }

  // // 获取置顶推荐文章
  // const topPosts = getTopPosts({ latestPosts, allNavPages })

  return (
    <div
      id='hero-right-wrapper'
      onMouseLeave={handleMouseLeave}
      className='flex-1 relative w-full'>
      {/* 置顶推荐文章 */}
      <div
        id='top-group'
        className='w-full flex space-x-3 xl:space-x-0 xl:grid xl:grid-cols-3 xl:gap-3 xl:h-[342px]'>
        {topPosts?.map((p, index) => {
          return (
            <Link href={`${siteConfig('SUB_PATH', '')}/${p?.slug}`} key={index}>
              <div className='cursor-pointer h-[164px] group relative flex flex-col w-52 xl:w-full overflow-hidden shadow bg-white dark:bg-black dark:text-white rounded-xl'>
                <LazyImage
                  priority={index === 0}
                  className='h-24 object-cover'
                  alt={p?.title}
                  src={p?.pageCoverThumbnail || siteInfo?.pageCover}
                />
                <div className='group-hover:text-indigo-600 dark:group-hover:text-yellow-600 line-clamp-2 overflow-hidden m-2 font-semibold'>
                  {p?.title}
                </div>
                {/* hover 悬浮的 ‘荐’ 字 */}
                <div className='opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-200 transition-all absolute -top-2 -left-2 bg-indigo-600 dark:bg-yellow-600  text-white rounded-xl overflow-hidden pr-2 pb-2 pl-4 pt-4 text-xs'>
                  {locale.COMMON.RECOMMEND_BADGES}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
      {/* 一个大的跳转文章卡片 */}
      <TodayCard cRef={todayCardRef} siteInfo={siteInfo} />
    </div>

  )
}
/**
 * 了解更多按鈕
 * @returns
 */
// function MoreButton() {
//   const url3 = siteConfig('HEO_INFO_CARD_URL3', null, CONFIG)
//   const text3 = siteConfig('HEO_INFO_CARD_TEXT3', null, CONFIG)
//   if (!url3) {
//     return <></>
//   }
//   return (
//     <Link href={url3}>
//       <div
//         className={
//           'group bg-indigo-400 dark:bg-yellow-500 hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white flex items-center transition-colors duration-200 py-2 px-3 rounded-full space-x-1'
//         }>
//         <ArrowRightCircle
//           className={
//             'group-hover:stroke-black dark:group-hover:stroke-white w-6 h-6 transition-all duration-100'
//           }
//         />
//         <div className='font-bold'>{text3}</div>
//       </div>
//     </Link>
//   )
// }

/**
 * 欢迎语
 */
// function GreetingsWords() {
//   const greetings = siteConfig('HEO_INFOCARD_GREETINGS', null, CONFIG)
//   const [greeting, setGreeting] = useState(greetings[0])
//   // 每次点击，随机获取greetings中的一个
//   const handleChangeGreeting = () => {
//     const randomIndex = Math.floor(Math.random() * greetings.length)
//     setGreeting(greetings[randomIndex])
//   }

//   return (
//     <div
//       onClick={handleChangeGreeting}
//       className=' select-none cursor-pointer py-1 px-2 bg-indigo-400 hover:bg-indigo-50  hover:text-indigo-950 dark:bg-yellow-500 dark:hover:text-white dark:hover:bg-black text-sm rounded-lg  duration-200 transition-colors'>
//       {greeting}
//     </div>
//   )
// }

export default HomeHero