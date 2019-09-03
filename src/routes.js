import HomePage from "pages/HomePage"
import AboutUs from "pages/AboutUsPage"
import Post from "pages/PostPage"
import Blog from "pages/BlogPage"

const routes = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    path: "/about-us",
    component: AboutUs,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/post",
    component: Post,
  },
]

export default routes