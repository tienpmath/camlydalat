import EditClient from "@/app/components/EditClient";
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EditPage({ params }: PageProps) {
  const { slug } = await params; // unwrap Promise

  
  return <EditClient id={slug} />;
}
