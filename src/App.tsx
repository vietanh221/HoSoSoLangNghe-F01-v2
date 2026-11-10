import React, { useState } from 'react';
import { CRAFT_VILLAGES, ARTISANS_DIRECTORY } from './data/craftVillages';
import { CraftVillage, Artisan } from './types';
import { Navbar } from './components/Navbar';
import { VillageSelector } from './components/VillageSelector';
import { VillageOverview } from './components/VillageOverview';
import { ProductionStepViewer } from './components/ProductionStepViewer';
import { ArtisanDirectory } from './components/ArtisanDirectory';
import { IconicProductsGallery } from './components/IconicProductsGallery';
import { ProjectDossierModal } from './components/ProjectDossierModal';
import { HeritagePassportModal } from './components/HeritagePassportModal';
import { ContributeArtisanModal } from './components/ContributeArtisanModal';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedVillageId, setSelectedVillageId] = useState<string>('bat-trang');
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [artisansList, setArtisansList] = useState<Artisan[]>(ARTISANS_DIRECTORY);
  
  // Modals
  const [isProjectModalOpen, setIsProjectModalOpen] = useState<boolean>(false);
  const [isPassportModalOpen, setIsPassportModalOpen] = useState<boolean>(false);
  const [isContributeModalOpen, setIsContributeModalOpen] = useState<boolean>(false);

  // Active village
  const currentVillage: CraftVillage = 
    CRAFT_VILLAGES.find((v) => v.id === selectedVillageId) || CRAFT_VILLAGES[0];

  const handleAddArtisan = (newArtisan: Artisan) => {
    setArtisansList((prev) => [newArtisan, ...prev]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-stone-900">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 120, behavior: 'smooth' });
        }}
        onOpenProjectModal={() => setIsProjectModalOpen(true)}
        onOpenPassportModal={() => setIsPassportModalOpen(true)}
        currentVillageName={currentVillage.name}
      />

      {/* Village Quick Selector Bar */}
      <VillageSelector
        villages={CRAFT_VILLAGES}
        selectedVillageId={selectedVillageId}
        onSelectVillage={(id) => {
          setSelectedVillageId(id);
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Tab Content Rendering */}
        {activeTab === 'overview' && (
          <VillageOverview
            village={currentVillage}
            onNavigateToTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 120, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'steps' && (
          <ProductionStepViewer
            steps={currentVillage.steps}
            villageName={currentVillage.name}
          />
        )}

        {activeTab === 'artisans' && (
          <ArtisanDirectory
            artisans={artisansList}
            currentVillageId={currentVillage.id}
            onOpenContributeModal={() => setIsContributeModalOpen(true)}
          />
        )}

        {activeTab === 'products' && (
          <IconicProductsGallery
            products={currentVillage.products}
            villageName={currentVillage.name}
          />
        )}
      </main>

      {/* Footer with Student Citation */}
      <Footer onOpenProjectModal={() => setIsProjectModalOpen(true)} />

      {/* Modals */}
      <ProjectDossierModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
      />

      <HeritagePassportModal
        isOpen={isPassportModalOpen}
        onClose={() => setIsPassportModalOpen(false)}
        villageName={currentVillage.name}
      />

      <ContributeArtisanModal
        isOpen={isContributeModalOpen}
        onClose={() => setIsContributeModalOpen(false)}
        villageId={currentVillage.id}
        villageName={currentVillage.name}
        onAddArtisan={handleAddArtisan}
      />
    </div>
  );
}
