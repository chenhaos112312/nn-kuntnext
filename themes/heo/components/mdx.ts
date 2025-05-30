// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'

export interface HomeCarouselMetadata {
  title: string
  banner: string
  description: string
  date: string
  authorName: string
  authorAvatar: string
  pin: boolean
  directory: string
  link: string
}

// const POSTS_PATH = path.join(process.cwd(), 'posts')

export const getKunPosts = (): HomeCarouselMetadata[] => {
  // if (!fs.existsSync(POSTS_PATH)) {
  //   return []
  // }

  const posts: HomeCarouselMetadata[] = []

  const traverseDirectory = (currentPath: string) => {
    // const files = fs.readdirSync(currentPath)

    // files.forEach((file) => {
    //   const filePath = path.join(currentPath, file)
    //   const stat = fs.statSync(filePath)

    //   if (stat.isDirectory()) {
    //     traverseDirectory(filePath)
    //   } else if (file.endsWith('.mdx')) {
    //     const fileContents = fs.readFileSync(filePath, 'utf8')
    //     const { data } = matter(fileContents)

    //     if (!data.pin) {
    //       return
    //     }

    //     const parentDirectory = path.basename(path.dirname(filePath))
    //     const fileName = path.basename(file, '.mdx')

    //     posts.push({
    //       title: data.title,
    //       banner: data.banner,
    //       description: data.description,
    //       date: new Date(data.date).toISOString(),
    //       authorName: data.authorName,
    //       authorAvatar: data.authorAvatar,
    //       pin: data.pin,
    //       directory: parentDirectory,
    //       link: `/doc/${parentDirectory}/${fileName}`
    //     })
    //   }
    // })
     posts.push({
          title: '网站说明和常见问题',
          banner: 'https://www.notion.so/images/page-cover/nasa_robert_stewart_spacewalk_2.jpg',
          description: '本文为GalGame玩家和本站用户提供了常见问题解答，涵盖了游戏下载、解压、运行、转区、模拟器使用等方面。文章详细介绍了如何获取最新网址、防止失联、解决游戏打不开的问题、运行PE游戏的方法，以及本站资源下载和访问问题的解决方案。此外，还提供了相关工具和教程的链接，帮助用户更好地享受GalGame。如有未覆盖的问题，欢迎提供反馈',
          date: '2025/05/25 18:47:18',
          authorName: 'palentum',
          authorAvatar: 'https://img.notionusercontent.com/s3/prod-files-secure%2F6d522dab-b545-4b8d-b1c8-d5dc822a2f02%2F29db38d2-d5fa-4fa6-8a92-3b527cfe80d1%2Ffavicon.svg/size/?exp=1748257352&sig=u-PLXZ5twdImj8ga2ZLQ_weQ4a5-kGuQnmJFeoJvH8U&id=1fb36ba3-3dc4-81a6-ac77-000b07df8966&table=collection&userId=233c0707-4f1a-440b-9819-e87e246bdeef',
          pin: true,
          directory: 'notice',
          link: `/doc/aa`
        })

         posts.push({
          title: '网站说明和常见问题2',
          banner: 'https://www.notion.so/images/page-cover/nasa_robert_stewart_spacewalk_2.jpg',
          description: '2本文为GalGame玩家和本站用户提供了常见问题解答，涵盖了游戏下载、解压、运行、转区、模拟器使用等方面。文章详细介绍了如何获取最新网址、防止失联、解决游戏打不开的问题、运行PE游戏的方法，以及本站资源下载和访问问题的解决方案。此外，还提供了相关工具和教程的链接，帮助用户更好地享受GalGame。如有未覆盖的问题，欢迎提供反馈',
          date: '2025/05/25 18:47:18',
          authorName: 'palentum',
          authorAvatar: 'https://img.notionusercontent.com/s3/prod-files-secure%2F6d522dab-b545-4b8d-b1c8-d5dc822a2f02%2F29db38d2-d5fa-4fa6-8a92-3b527cfe80d1%2Ffavicon.svg/size/?exp=1748257352&sig=u-PLXZ5twdImj8ga2ZLQ_weQ4a5-kGuQnmJFeoJvH8U&id=1fb36ba3-3dc4-81a6-ac77-000b07df8966&table=collection&userId=233c0707-4f1a-440b-9819-e87e246bdeef',
          pin: true,
          directory: 'notice',
          link: `/doc/bb`
        })
  }

  // traverseDirectory(POSTS_PATH)
    traverseDirectory("POSTS_PATH")


  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}
export default HomeCarouselMetadata