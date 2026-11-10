export interface ProductionStep {
  id: string;
  stepNumber: number;
  title: string;
  subtitle: string;
  duration: string;
  rawMaterials: string[];
  keyTools: string[];
  technicalSecret: string; // Mẹo nghề gia truyền
  instructions: string[];
  caution: string;
  stageName: string;
}

export interface Artisan {
  id: string;
  villageId: string;
  fullName: string;
  title: 'Nghệ nhân Nhân dân' | 'Nghệ nhân Ưu tú' | 'Nghệ nhân Bàn tay vàng' | 'Nghệ nhân Làng nghề';
  birthYear: number;
  craftField: string;
  yearsOfExperience: number;
  consentVerified: boolean;
  consentCode: string; // Số hiệu văn bản cam kết công bố
  consentDate: string;
  bio: string;
  workshopAddress: string;
  contactPhone: string;
  masterpieces: string[];
  awards: string[];
  quote: string;
  avatarUrl?: string;
}

export interface IconicProduct {
  id: string;
  villageId: string;
  name: string;
  category: string;
  craftEra: string;
  dimensions: string;
  material: string;
  craftingTechniques: string[];
  culturalMeaning: string;
  craftingTime: string;
  imageUrl: string;
  artisanCredit: string;
  description: string;
}

export interface CraftVillage {
  id: string;
  name: string;
  location: string;
  district: string;
  province: string;
  foundedYear: string;
  patriarch: string; // Ông tổ nghề
  heritageRecognition: string; // Cấp công nhận di sản
  shortDescription: string;
  fullHistory: string;
  uniqueness: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  heroImage: string;
  craftCategory: string;
  activeHouseholds: number;
  activeArtisansCount: number;
  soundscapeDescription: string;
  steps: ProductionStep[];
  products: IconicProduct[];
}

export interface HeritageCertificate {
  certificateId: string;
  recipientName: string;
  villageName: string;
  issueDate: string;
  verificationCode: string;
}
