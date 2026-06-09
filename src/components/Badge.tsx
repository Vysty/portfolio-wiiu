export default function Badge({ title, content, children} : {title: string, content: string, children?: React.ReactNode}) {
  return (
    <div className={"flex flex-col justify-center items-center"}>
      <div className={"w-12 h-12 rounded-full flex items-center justify-center [&_svg]:size-10"}>
        {children}
      </div>
      <p className={"text-2xl font-extrabold"}>{title}</p>
      <p>{content}</p>
    </div>
  )
}