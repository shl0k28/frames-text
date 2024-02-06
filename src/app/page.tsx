import { Metadata } from "next";
// import Echo from "@/app/components/Echo";
import { useFramesReducer, FrameButton, FrameContainer, FrameImage, FrameInput, getPreviousFrame } from 'frames.js/next/server'

const postUrl = `${process.env["HOST"]}/api/echo`;

// export async function generateMetadata(): Promise<Metadata> {
//   const imageUrl = `${process.env["HOST"]}/api/images/start?date=${Date.now()}`;
//   return {
//     title: "Echo the Dolphin",
//     description: "Type something and Echo will say it back!",
//     openGraph: {
//       title: "Echo the Dolphin",
//       images: [imageUrl],
//     },
//     other: {
//       "fc:frame": "vNext",
//       "fc:frame:image": 'http://localhost:3000/public/dark_imladris.png',
//       "fc:frame:post_url": postUrl,
//       // "fc:frame:input:text": "Type something here...",
//       "fc:frame:button:1": "Based Mint",
//     },
//   };
// }
const reducer = (state: any, action: any) => ({ count: state.count + 1 });

export default async function Home(props: any){

  const previousFrame = getPreviousFrame(props.searchParams)
  const [state, dispatch] = useFramesReducer(reducer, { count: 0 }, previousFrame);

  return <FrameContainer
      postUrl="/api/frames"
      state={state}
      previousFrame={previousFrame}
    >
      <FrameImage src="https://picsum.photos/seed/frames.js/1146/600" />
      <FrameInput text="Add your ens/base here" />
      <FrameButton onClick={dispatch}>{state.count}</FrameButton>
    </FrameContainer>
}
