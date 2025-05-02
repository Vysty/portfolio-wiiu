export default function GameSlot({title="title not set", imageUrl=null}) {
    return (
        <div className={"w-40 h-40 border-5 border-gray-400 rounded-2xl"}>
            {imageUrl ?
                <img src={imageUrl} alt={"Image_placement"} className={""}/> :
                <div className={""}>noImage</div>
            }
            <p>{title}</p>
        </div>
    )
}