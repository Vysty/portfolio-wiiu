export default function Badge({ title, content, children} : {title: string, content: string, children?: React.ReactNode}) {
  return (
    <div className={"max-w-72 h-fit flex flex-col justify-start items-center"}>
      <div className={"w-12 h-12 rounded-full flex items-center justify-center [&_svg]:size-10"}>
        {children}
      </div>
      <p className={"text-2xl font-extrabold"}>{title}</p>
      <p className={"text-center break-word"}>{content}</p>
    </div>
  )
}