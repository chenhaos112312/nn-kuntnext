const CONFIG = {
  NAV_INDEX_PAGE: 'about', // 文档首页显示的文章，请确此路径包含在您的notion数据库中

  NAV_AUTO_SORT: process.env.NEXT_PUBLIC_NAV_AUTO_SORT || true, // 是否自动按分类名 归组排序文章；自动归组可能会打乱您Notion中的文章顺序

  NAV_SHOW_TITLE_TEXT: false, // 标题栏显示文本
  NAV_USE_CUSTOM_MENU: true, // 使用自定义菜单（可支持子菜单，支持自定义分类图标），若为true则显示所有的category分类

  // 菜单
  NAV_MENU_CATEGORY: true, // 显示分类
  NAV_MENU_TAG: true, // 显示标签
  NAV_MENU_ARCHIVE: true, // 显示归档
  NAV_MENU_SEARCH: true, // 显示搜索

  // Widget
  NAV_WIDGET_REVOLVER_MAPS:
    process.env.NEXT_PUBLIC_WIDGET_REVOLVER_MAPS || 'false', // 地图插件
  NAV_WIDGET_TO_TOP: true, // 跳回顶部

  //nav来自heo显示封面配置
  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览

}

export default CONFIG
