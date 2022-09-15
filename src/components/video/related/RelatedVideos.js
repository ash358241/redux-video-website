import { useGetRelatedVideosQuery } from "../../../fatures/api/apiSlice";
import RelatedVideo from "./RelatedVideo";

export default function RelatedVideos({id, title}) {
    
    const {data: relatedVideos} = useGetRelatedVideosQuery({id, title})

    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {
                relatedVideos?.length > 0 && (relatedVideos.map(video => <RelatedVideo video={video} />))
            }
        </div>
    );
}
