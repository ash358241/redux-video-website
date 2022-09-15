import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "../../fatures/api/apiSlice";
import Description from "../video/Description";
import Player from "../video/Player";
import RelatedVideos from "../video/related/RelatedVideos";

export default function Video() {
    let { videoId } = useParams()
    const { data: video } = useGetVideoQuery(videoId)

    return (
        <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        {
                            video?.id &&
                            <>
                                <Player title={video.title} link={video.link} />
                                <Description title={video.title} date={video.date} description={video.description} />
                            </>
                        }
                    </div>

                    <RelatedVideos />
                </div>
            </div>
        </section>
    );
}
