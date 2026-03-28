export interface Project {
  num: string;
  name: string;
  desc: string;
  tags: string[];
  href: string;
}

export const projects: Project[] = [
  {
    num: '01',
    name: 'Nexus',
    desc: 'Plataforma de analytics para pequenas empresas. Reduziu o tempo de leitura de dados de horas para minutos com dashboards configuráveis e alertas automáticos.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    href: '#',
  },
  {
    num: '02',
    name: 'Relay',
    desc: 'Editor colaborativo com sync em tempo real. Resolveu o problema de conflitos em documentos técnicos compartilhados entre times distribuídos.',
    tags: ['React', 'Node.js', 'WebSocket'],
    href: '#',
  },
  {
    num: '03',
    name: 'forge',
    desc: 'CLI open-source para automação de deploy. Suporte a múltiplos providers, configuração via código e zero dependências externas.',
    tags: ['Go', 'CLI', 'Open Source'],
    href: '#',
  },
];
