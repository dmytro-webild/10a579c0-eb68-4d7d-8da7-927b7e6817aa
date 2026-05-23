"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ContactText from '@/components/sections/contact/ContactText';
import { Music, Sparkles, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeLargeTitles"
        background="fluid"
        cardStyle="solid"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Experience", id: "about" },
        { name: "Offerings", id: "products" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Shaka's Kraal"
      button={{ text: "Visit", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{ variant: "gradient-bars" }}
      title="Experience the Soul of Zulu Heritage"
      description="Step into Shaka's Kraal, where history breathes through authentic craftsmanship, culinary delights, and vibrant cultural storytelling."
      buttons={[{ text: "Explore History", href: "#about" }]}
      imageSrc="http://img.b2bpic.net/free-photo/sofa-pillow_74190-3920.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="A Legacy Preserved"
      description={[
        "Founded to honor the legacy of the great Zulu kings, Shaka's Kraal is an immersive cultural gateway. We bring tradition to life through interactive craft workshops, authentic heritage tours, and community-led storytelling sessions.",        "Our mission is to bridge the gap between ancient wisdom and contemporary appreciation, providing an intimate look into the heart of our culture."]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { icon: Sparkles, title: "Artisan Workshops", description: "Learn the traditional techniques of Zulu beadwork and pottery directly from master local artisans." },
        { icon: Music, title: "Cultural Performances", description: "Witness the power and rhythm of traditional music and dance that celebrates our storied past." },
        { icon: Utensils, title: "Traditional Culinary", description: "Savor authentic flavours prepared using age-old recipes passed down through generations." },
      ]}
      title="The Shaka's Kraal Experience"
      description="Engage with the traditions that define us through our curated range of cultural activities."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      animationType="slide-up"
      useInvertedBackground={true}
      products={[
        { id: "1", brand: "Artisan", name: "Beaded Zulu Necklace", price: "$45", rating: 5, reviewCount: "24", imageSrc: "http://img.b2bpic.net/free-photo/handcrafted-wooden-decorative-sculpture_23-2151003035.jpg" },
        { id: "2", brand: "Weavers", name: "Patterned Heritage Tapestry", price: "$120", rating: 5, reviewCount: "18", imageSrc: "http://img.b2bpic.net/free-photo/handmade-colored-texture-surface_23-2148383659.jpg" },
        { id: "3", brand: "Woodcraft", name: "Carved Heritage Mask", price: "$85", rating: 4, reviewCount: "32", imageSrc: "http://img.b2bpic.net/free-photo/male-traditional-venice-mask-world-famous-carnival_181624-33620.jpg" },
        { id: "4", brand: "Pottery", name: "Clay Serving Vessel", price: "$60", rating: 5, reviewCount: "12", imageSrc: "http://img.b2bpic.net/free-photo/professional-artisan-job-workshop_23-2148801608.jpg" },
        { id: "5", brand: "Crafts", name: "Woven Grass Basket", price: "$35", rating: 5, reviewCount: "40", imageSrc: "http://img.b2bpic.net/free-photo/painting-inspiration-supplies-placed-ready-be-painted-canvas_482257-127568.jpg" },
        { id: "6", brand: "Textiles", name: "Zulu Table Runner", price: "$50", rating: 4, reviewCount: "15", imageSrc: "http://img.b2bpic.net/free-photo/hand-painting-canvas_23-2148002551.jpg" },
      ]}
      title="Authentic Craft Treasures"
      description="Take home a piece of history. Every item is handmade by our local community artisans."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Our Impact"
      tag="Preserving Culture"
      metrics={[
        { id: "m1", value: "15+", description: "Master Artisans Supported" },
        { id: "m2", value: "5k+", description: "Guests Welcomed Annually" },
        { id: "m3", value: "200+", description: "Heritage Tours Conducted" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={true}
      title="Community Voices"
      description="Discover what our visitors say about their unforgettable cultural journey with us."
      testimonials={[
        { id: "1", title: "Remarkable Visit", quote: "An incredible window into a magnificent heritage. The artisans were so welcoming.", name: "Sarah Jenkins", role: "Traveler", imageSrc: "http://img.b2bpic.net/free-photo/stylish-woman-wearing-yellow-bandana_273609-13337.jpg" },
        { id: "2", title: "Authentic Experience", quote: "The culinary experience was the highlight of our trip. Truly authentic flavours.", name: "Michael Chen", role: "Visitor", imageSrc: "http://img.b2bpic.net/free-photo/two-teenage-girls-taking-selfie-after-shopping-spree-while-holding-bags_23-2149053482.jpg" },
        { id: "3", title: "Profound History", quote: "A profoundly respectful preservation of Zulu history. Simply remarkable.", name: "Amara Diallo", role: "Scholar", imageSrc: "http://img.b2bpic.net/free-photo/young-redhead-female-tourist-rests-her-trip-opens-thermos-drinks-hot-tea-having-break_1258-152038.jpg" }
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      text="Ready to explore the heritage of Shaka's Kraal? Contact us today to secure your visit."
      buttons={[{ text: "Book Your Tour" }]}
      background={{ variant: "sparkles-gradient" }}
      useInvertedBackground={true}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Shaka's Kraal"
      columns={[
        { title: "Explore", items: [{ label: "Our Heritage", href: "#about" }, { label: "Artisan Shops", href: "#products" }] },
        { title: "Support", items: [{ label: "Contact Us", href: "#contact" }, { label: "FAQ", href: "#contact" }] }
      ]}
      copyrightText="© 2025 Shaka's Kraal Heritage Preservation"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}