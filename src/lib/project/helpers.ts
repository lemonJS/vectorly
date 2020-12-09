import { Project } from '@type/project';

export function saveProject(project: Project) {
  const params = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(project)
  };

  fetch(`/api/projects/${project.id}`, params).catch(console.error);
}
