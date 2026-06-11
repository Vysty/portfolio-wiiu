export default function Badge({
  title,
  content,
  children,
}: {
  title: string
  content: string
  children?: React.ReactNode
}) {
  return (
    <div className={'max-w-72 h-fit flex flex-col justify-start items-center'}>
      <div
        className={
          'w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center [&_svg]:size-8 md:[&_svg]:size-10'
        }
      >
        {children}
      </div>
      <p className={'text-lg md:text-2xl font-extrabold text-center'}>{title}</p>
      <p className={'text-xs md:text-base text-center break-word'}>{content}</p>
    </div>
  )
}
