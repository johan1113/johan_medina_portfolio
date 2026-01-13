import { projects } from '@/lib/projects-data';
import ProjectClientPage from './ProjectClientPage';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  return <ProjectClientPage project={project} />;
}
