export default class PublicDirPathUtil {
  static getBlogImage(
    category_code: string,
    article_id: string,
    image_file_name: string,
  ): string {
    return `/image/blog/${category_code}/${article_id}/${image_file_name}`;
  }
}
