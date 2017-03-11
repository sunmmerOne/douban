/*
    接口api
    基于豆瓣开放平台的api图书，电影
 */

var baseUrl = "https://api.douban.com/v2/";


/*
    图书搜索:
    image:图书缩略图；
    title：图书名称；
    publisher：出版社
    author：作者
    price：价格
    pages：图书总页数
    summary：图书简介
    author_intro:作者介绍
 */

var Douban_apis = {
    book_search:baseUrl+"book/search",
    book_detail_id:baseUrl+"book/",
    movie_search:baseUrl+"movie/search"
}

module.exports = Douban_apis;