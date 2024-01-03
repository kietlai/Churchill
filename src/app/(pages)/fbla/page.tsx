import BlogPost from "@/app/components/fbla-blog/Blog"
import Navbar from "@/app/components/Nav"
import FooterProductPage from "@/app/components/FooterProductPage"


export default function blog() {
  return (
    <>
      <Navbar />
      <BlogPost />
      <FooterProductPage />
    </>
  )
}