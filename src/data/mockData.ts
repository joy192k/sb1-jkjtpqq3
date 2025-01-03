import { BoardMember, Announcement, Document, ARCRequest } from '@/types';

export const boardMembers: BoardMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'President',
    bio: 'Sarah has been a resident for 15 years and brings extensive experience in community management.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Vice President',
    bio: 'Michael is a local business owner with a passion for community development.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Treasurer',
    bio: 'Emily brings 20 years of financial management experience to the board.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  },
];

export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'Annual Community Picnic',
    date: '2024-06-15',
    content: 'Join us for our annual community picnic at the central park. Food and drinks will be provided.',
    category: 'event',
  },
  {
    id: '2',
    title: 'Pool Maintenance Schedule',
    date: '2024-05-01',
    content: 'The community pool will undergo routine maintenance from May 15-17.',
    category: 'news',
  },
];

export const documents: Document[] = [
  {
    id: '1',
    title: 'HOA Bylaws 2024',
    category: 'bylaws',
    description: 'Complete bylaws and regulations for the community.',
    url: '/documents/bylaws-2024.pdf',
  },
  {
    id: '2',
    title: 'Architectural Guidelines',
    category: 'covenants',
    description: 'Guidelines for home modifications and improvements.',
    url: '/documents/arc-guidelines.pdf',
  },
];

export const arcRequests: ARCRequest[] = [
  {
    id: '1',
    propertyAddress: '123 Oak Street',
    description: 'Install new fence in backyard',
    submissionDate: '2024-04-01',
    status: 'pending',
  },
  {
    id: '2',
    propertyAddress: '456 Maple Avenue',
    description: 'Solar panel installation',
    submissionDate: '2024-03-28',
    status: 'approved',
  },
];