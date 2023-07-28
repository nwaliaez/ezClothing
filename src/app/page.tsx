import Hero from "@/components/Hero";
import Products from "@/components/Products";
import SubNav from "@/components/SubNav";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <Container>
      <section className="bg-primary text-primary-foreground">
        <Hero />
      </section>
      <section className="container grid gap-5">
        <SubNav />
        <Products />
      </section>
    </Container>
  );
}
``