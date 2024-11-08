import Banner from '../components/Banner/index'

export default async function Page() {
  const bgVideo = "/assets/bg/bg2-hd.mp4";

  return (
    <>
      <Banner bgVideo={bgVideo} />
    </>
  );
}
