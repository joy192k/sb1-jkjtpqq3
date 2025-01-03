import { RequestType, RequestTypeInfo } from '@/types/arc';

export const REQUEST_TYPES: RequestTypeInfo[] = [
  {
    id: 'exterior-paint',
    label: 'Exterior Paint',
    description: 'Changes to exterior paint colors',
    requiredDocs: ['Color samples', 'Photos of areas to be painted'],
  },
  {
    id: 'roofing',
    label: 'Roofing',
    description: 'Roof replacement or major repairs',
    requiredDocs: ['Material specifications', 'Color samples', 'Contractor details'],
  },
  {
    id: 'fence',
    label: 'Fence Installation/Modification',
    description: 'New fence installation or changes to existing fence',
    requiredDocs: ['Property survey', 'Fence design/dimensions', 'Material details'],
  },
  {
    id: 'landscaping',
    label: 'Landscaping Changes',
    description: 'Major landscaping modifications',
    requiredDocs: ['Landscape plan', 'Plant list', 'Drainage details if applicable'],
  },
  {
    id: 'deck-patio',
    label: 'Deck or Patio Construction',
    description: 'New deck/patio or modifications',
    requiredDocs: ['Design plans', 'Material specifications', 'Property survey'],
  },
  {
    id: 'pool-spa',
    label: 'Pool or Spa Installation',
    description: 'Installation of pool, spa, or related equipment',
    requiredDocs: ['Site plan', 'Pool design', 'Equipment specifications', 'Fencing details'],
  },
  {
    id: 'windows-doors',
    label: 'Window/Door Replacements',
    description: 'Replacement or modification of windows or doors',
    requiredDocs: ['Product specifications', 'Color/style details'],
  },
  {
    id: 'solar-panels',
    label: 'Solar Panel Installation',
    description: 'Installation of solar panels or related equipment',
    requiredDocs: ['Panel specifications', 'Roof plan', 'Installation details'],
  },
  {
    id: 'driveway',
    label: 'Driveway Extension',
    description: 'Modifications to driveway',
    requiredDocs: ['Site plan', 'Material specifications'],
  },
  {
    id: 'other',
    label: 'Other',
    description: 'Other modifications not listed above',
    requiredDocs: ['Project details', 'Relevant documentation'],
  },
];

export function getRequestTypeInfo(type: RequestType): RequestTypeInfo {
  return REQUEST_TYPES.find(t => t.id === type) || REQUEST_TYPES[REQUEST_TYPES.length - 1];
}

export function generateAiSuggestions(files: File[], requestType: RequestType): string[] {
  const typeInfo = getRequestTypeInfo(requestType);
  const fileNames = files.map(f => f.name.toLowerCase());
  const suggestions: string[] = [];

  // Check for missing required documents
  typeInfo.requiredDocs.forEach(doc => {
    const hasDoc = fileNames.some(name => 
      name.includes(doc.toLowerCase().replace(/[^a-z0-9]/g, ''))
    );
    if (!hasDoc) {
      suggestions.push(`Consider including ${doc.toLowerCase()}`);
    }
  });

  return suggestions;
}