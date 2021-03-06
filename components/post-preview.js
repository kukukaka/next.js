import DateFormatter from '../components/date-formatter'
import Link from 'next/link'

export default function PostPreview({
  title,
  date,
  excerpt,
  slug,
}) {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug cabeza">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4 cuerpo">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4 cuerpo">{excerpt}</p>
    </div>
  )
}
