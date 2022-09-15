import { useGetVideosQuery } from "../../fatures/api/apiSlice";
import Video from "./Video";

export default function Videos() {
    const {data: videos} = useGetVideosQuery()
    return (
        <>
            {
                videos?.map(video => <Video key={video.id} video={video} />)
            }
        </>
    );
}
