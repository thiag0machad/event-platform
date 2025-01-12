import classNames from 'classnames'
import { format, isPast } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CheckCircle, Lock } from 'phosphor-react'
import { Link, useParams } from 'react-router-dom'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>()

  const availableDateFormatted = isPast(props.availableAt)
    ? format(props.availableAt, "EEEE' • 'd ' de 'MMMM' • 'k'h'mm", { locale: ptBR })
    : 'Indisponível'

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>
      <div
        className={`rounded border p-4 mt-2 ${
          slug === props.slug ? 'bg-green-500 border-green-500' : 'border-gray-500'
        }`}
      >
        <header className="flex items-center justify-between">
          {isPast(props.availableAt) ? (
            <span
              className={`text-sm font-medium flex items-center gap-2 ${
                slug === props.slug ? 'text-white' : 'text-blue-500'
              }`}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={`text-xs font-bold rounded px-2 py-[0.125rem] text-white ${
              slug === props.slug ? 'border-white' : 'border-green-300'
            }`}
          >
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong
          className={`mt-5 block ${slug === props.slug ? 'text-white' : 'text-gray-200'}`}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  )
}