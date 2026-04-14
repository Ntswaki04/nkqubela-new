// components/sections/CSI/CSIArticleTemplate.tsx
"use client";

import { useMemo } from "react";
import { notFound } from "next/navigation";
import CSIArticleLayout from "@/components/CSIArticleLayout";
import ImageGallery from "@/components/ImageGallery";
import { initiatives } from "@/components/sections/CSI/csiData";
import { csiArticlesData } from "@/components/sections/CSI/CSIArticleData";

export default function CSIArticleTemplate({ slug }: { slug: string }) {
  // Find the master grid info for basic stuff like title, date, tag
  const initiativeIndex = useMemo(
    () => initiatives.findIndex((i) => i.slug === `/${slug}`),
    [slug],
  );
  const initiative = initiatives[initiativeIndex];

  // Find the complex article data (paragraphs, galleries, etc)
  const articleData = useMemo(
    () => csiArticlesData.find((a) => a.slug === `/${slug}`),
    [slug],
  );

  if (!initiative || !articleData) {
    return notFound();
  }

  // Determine Prev/Next Links for the layout footer based on the array
  const prevIndex =
    initiativeIndex > 0 ? initiativeIndex - 1 : initiatives.length - 1;
  const nextIndex =
    initiativeIndex < initiatives.length - 1 ? initiativeIndex + 1 : 0;

  const prevItem = initiatives[prevIndex];
  const nextItem = initiatives[nextIndex];

  // Determine "related items" (just pick 2 other random ones or adjacent ones)
  const relatedItems = [
    initiatives[(initiativeIndex + 1) % initiatives.length],
    initiatives[(initiativeIndex + 2) % initiatives.length],
  ];

  return (
    <CSIArticleLayout
      tag={initiative.tag}
      tagColor={articleData.tagColor}
      title={initiative.title}
      date={initiative.date}
      readTime={articleData.readTime}
      featuredImage={initiative.img}
      featuredImageAlt={articleData.featuredImageAlt}
      articleTags={articleData.articleTags}
      prevLink={prevItem.slug}
      prevTitle={prevItem.title}
      nextLink={nextItem.slug}
      nextTitle={nextItem.title}
      relatedItems={relatedItems.map((item) => ({
        slug: item.slug,
        img: item.img,
        title: item.title,
        date: item.date,
      }))}
    >
      {articleData.sections.map((section, idx) => {
        switch (section.type) {
          case "paragraph":
            return (
              <p key={idx} className="mb-6 leading-relaxed">
                {section.text}
              </p>
            );
          case "highlight":
            return (
              <div
                key={idx}
                className="my-10 p-8 bg-gray-50 dark:bg-darklight border-l-4 border-primary rounded-r-xl italic text-lg text-gray-700 dark:text-gray-300"
              >
                {section.text}
              </div>
            );
          case "heading":
            return (
              <h3
                key={idx}
                className="text-2xl font-bold dark:text-white mb-6 mt-8"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {section.text}
              </h3>
            );
          case "gallery":
            return (
              <div key={idx} className="mb-8">
                <ImageGallery images={section.images} />
              </div>
            );
          default:
            return null;
        }
      })}
    </CSIArticleLayout>
  );
}
