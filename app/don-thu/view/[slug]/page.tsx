import ViewClient from "@/app/components/ViewClient";

interface PageProps {
  params: Promise<{ slug: string }>; // Next.js 15, params là Promise
}
const ViewPage=async ({ params }: PageProps)=> {

  const { slug } = await params; // unwrap Promise
  return <ViewClient id={slug} />;
}



export default ViewPage;