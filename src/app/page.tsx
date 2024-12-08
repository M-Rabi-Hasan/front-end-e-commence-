import BannerSection from "../../components/BannerSection";
import CategorySection from "../../components/CategorySection";
import DiscountSection from "../../components/DiscountSection";
import FeaturedSection from "../../components/FeaturedSection";
import HeroSection from "../../components/HeroSection";
import LatestBlogSection from "../../components/LatestBlogSection";
import LatestSection from "../../components/LatestSection";
import NewBannerSection from "../../components/New-Banner-Section";
import ShopexOfferSection from "../../components/ShopexOfferSection";
import TrendingProductsSection from "../../components/TrendingProductsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedSection/>
      <LatestSection/>
      <ShopexOfferSection/>
      <BannerSection/>
      <TrendingProductsSection/>
      <DiscountSection/>
      <CategorySection/>
      <NewBannerSection/>
      <LatestBlogSection/>
    </div>
  );
}
