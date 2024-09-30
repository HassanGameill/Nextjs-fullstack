import React from "react";
import { articals } from "../../../../types/articals.type"; // Ensure you have the correct import
import ArticalsCard from "@/components/sections/Articals/ArticalsCard";

interface ShowArticlesPageProps {
  params: { id: string };
}

const ShowArticlesPage = async ({ params }: ShowArticlesPageProps) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  
  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }
  
  const article: articals = await res.json();

  return (
    <section className="container pt-40">
      <ArticalsCard {...article} />
    </section>
  );
};

export default ShowArticlesPage;
