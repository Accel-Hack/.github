import React from 'react';
import BLOGS from '@/data/blogs.json';
import Article from '@/component/organism/Article';
import styles from './page.module.css';
import Acelhack1 from '@/asset/img/common/accelhack1.png';
import BlogSection, { BlogSectionType } from '@/component/molecule/BlogSection';
import PublicDirPathUtil from '@/utils/PublicDirPathUtil';

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return BLOGS.flatMap((blog) => blog.articles).map((b) => {
    return { id: b.id };
  });
}

const BlogIdPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const article = BLOGS.flatMap((blog) => blog.articles).find(
    (b) => b.id === id,
  );

  return (
    <>
      {article ? (
        <Article caption={article?.category ?? ''}>
          <div className={styles.container}>
            <div className={styles.content}>
              {article.blocks.map((content, index) => (
                <BlogSection
                  key={index}
                  blockType={content.type as BlogSectionType}
                  content={content.text !== '' ? content.text : undefined}
                  imgSrc={
                    content.imgSrc != ''
                      ? content.imgSrc == 'default'
                        ? Acelhack1.src
                        : PublicDirPathUtil.getBlogImage(
                            article?.category_code,
                            article?.id,
                            content.imgSrc,
                          )
                      : undefined
                  }
                  title={index == 0 ? article.title : undefined}
                  date={index == 0 ? article.date : undefined}
                />
              ))}
            </div>
          </div>
        </Article>
      ) : (
        <div>お探しのページは存在しません</div>
      )}
    </>
  );
};

export default BlogIdPage;
