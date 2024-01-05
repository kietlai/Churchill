import BlogPost from "@/app/components/fbla-blog/Blog"
import Navbar from "@/app/components/Nav"
import FooterProductPage from "@/app/components/FooterProductPage"
import Sign from "@/app/components/fbla-blog/Sign"


export default function Blog() {
  return (
    <>
      <Navbar />
      <BlogPost />
      <Sign />
      <FooterProductPage />
    </>
  )
}