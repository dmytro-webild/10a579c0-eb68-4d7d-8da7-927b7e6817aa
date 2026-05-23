"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
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
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Sarah Jenkins", role: "Traveler", testimonial: "An incredible window into a magnificent heritage. The artisans were so welcoming.", imageSrc: "http://img.b2bpic.net/free-photo/stylish-woman-wearing-yellow-bandana_273609-13337.jpg" },
        { id: "2", name: "Michael Chen", role: "Visitor", testimonial: "The culinary experience was the highlight of our trip. Truly authentic flavours.", imageSrc: "http://img.b2bpic.net/free-photo/two-teenage-girls-taking-selfie-after-shopping-spree-while-holding-bags_23-2149053482.jpg" },
        { id: "3", name: "Amara Diallo", role: "Scholar", testimonial: "A profoundly respectful preservation of Zulu history. Simply remarkable.", imageSrc: "http://img.b2bpic.net/free-photo/young-redhead-female-tourist-rests-her-trip-opens-thermos-drinks-hot-tea-having-break_1258-152038.jpg" },
        { id: "4", name: "David Miller", role: "Tourist", testimonial: "I learned more in three hours than in weeks of research. A must-visit.", imageSrc: "http://img.b2bpic.net/free-photo/carefree-mixed-race-male-sketaboarder-holds-skateboard-smiles-happily_273609-8747.jpg" },
        { id: "5", name: "Elena Rossi", role: "Visitor", testimonial: "Vibrant, educational, and deeply moving. We will be back next year.", imageSrc: "http://img.b2bpic.net/free-photo/bright-sunny-day-group-friends-are-enjoying-their-walk-autumn-forest_613910-17467.jpg" },
      ]}
      title="Stories from Shaka's Kraal"
      description="Discover what our visitors say about their unforgettable cultural journey with us."
    />
  </div>

  <div id="contact" data-section="contact">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "Do I need to book tours in advance?", content: "We highly recommend booking at least 48 hours in advance for our artisan workshops." },
        { id: "q2", title: "Is the location accessible?", content: "Yes, our kraal facilities are fully wheelchair accessible and family-friendly." },
        { id: "q3", title: "Are there parking facilities?", content: "Secure on-site parking is available for all visitors free of charge." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-landscape-with-river-bridge-background_1136-210.jpg"
      mediaAnimation="opacity"
      title="Plan Your Visit"
      description="Answers to frequently asked questions to help you prepare for an authentic experience."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Navigate",          items: [
            { label: "About Us", href: "#about" },
            { label: "Products", href: "#products" },
            { label: "FAQ", href: "#contact" },
          ],
        },
        {
          title: "Connect",          items: [
            { label: "Instagram", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "WhatsApp", href: "#" },
          ],
        },
      ]}
      bottomLeftText="© 2024 Shaka's Kraal Cultural Center"
      bottomRightText="Heritage Preservation Initiative"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
