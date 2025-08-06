

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

import BasicInfo from "../component/BasicInfo";
import Taxonomy from "../component/taxonomy";
import ProteinSequence from "../component/sequence/proteinSequence";
import RnaSequence from "../component/sequence/RnaSequence";
import GenomeSequence from "../component/sequence/GenomeSequence";
import GenomicLocation from "../component/genomicLocation";
import LeftSidebar from "../component/LeftSidebar";
import Navbar from "../component/Navbar";

import { getGeneById } from "../api/operations/geneOperations";
import { getProteinByGeneId } from "../api/operations/proteinOperations";
import { getTranscriptByGeneId } from "../api/operations/transcriptOperations";
import { getGenomeBySequenceId } from "../api/operations/genomeOperations";

const GeneFeaturePage = () => {
  const { geneId } = useParams();

  const [geneData, setGeneData] = useState(null);
  const [proteinData, setProteinData] = useState(null);
  const [rnaData, setRnaData] = useState(null);
  const [genomeData, setGenomeData] = useState(null);
  const [geneFeatureInfo, setGeneFeatureInfo] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSequence, setShowSequence] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);

        const geneResponse = await getGeneById(geneId)();
        setGeneData(geneResponse);

        const proteinResponse = await getProteinByGeneId(geneId)();
        setProteinData({
          protein_id: proteinResponse.protein_id,
          protein_length: proteinResponse.protein_length,
          compressed_sequence: proteinResponse.compressed_sequence,
        });

        const transcriptResponse = await getTranscriptByGeneId(geneId)();
        const transcript = transcriptResponse.transcripts[0];
        setRnaData({
          transcript_id: transcript.transcript_id,
          rna_length: transcript.length,
          rna_sequence: transcript.compressed_sequence,
        });

        const sequenceId = proteinResponse.genomic_location.contig;
        const genomeResponse = await getGenomeBySequenceId(sequenceId)();
        setGenomeData({
          sequence_id: genomeResponse.sequence_id,
          genome_length: genomeResponse.length,
          genome_sequence: genomeResponse.compressed_sequence,
        });

        setGeneFeatureInfo({
          transcript_id: transcript.transcript_id,
          transcript_length: transcript.length,
          protein_length: proteinResponse.protein_length,
          transcript_type: transcript.transcript_type || "mRNA",
          genomic_length: genomeResponse.length,
        });

        const locationObj = {
          sequence_id: genomeResponse.sequence_id,
          genome_length: genomeResponse.length,
          genome_sequence: genomeResponse.compressed_sequence,
          start: proteinResponse.genomic_location.start,
          end: proteinResponse.genomic_location.end,
          strand: proteinResponse.genomic_location.strand,
          sequence_level: proteinResponse.sequence_type,
          organism_abbrev: proteinResponse.organism,
        };
        setLocation(locationObj);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [geneId]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-screen overflow-x-hidden relative">
      {/* Fixed Navbar */}
      <div className="absolute top-0 left-0 right-0 z-50 w-full bg-white shadow-md">
        <Navbar />
      </div>

      {/* Add padding to prevent content from going under navbar */}
      <div className="pt-40 px-4 space-y-6 max-w-full">
        {geneData ? (
          <>
            <BasicInfo gene={geneData} />

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Sticky Sidebar */}
              <aside className="w-full lg:w-64 flex-shrink-0">
                <div className="sticky top-20">
                  <LeftSidebar scrollToSection={scrollToSection} />
                </div>
              </aside>

              {/* Main content */}
              <main className="flex-1 space-y-6">
                {location && (
                  <section id="Genomic-Location">
                    <GenomicLocation location={location} />
                  </section>
                )}

                <section id="Taxonomy">
                  <Taxonomy />
                </section>

                <section id="Sequences">
                  <div
                    className="cursor-pointer flex items-center gap-2 bg-gray-200 border-gray-300 px-4 py-2 rounded-md border"
                    onClick={() => setShowSequence(!showSequence)}
                  >
                    <FaChevronRight
                      className={`transition-transform duration-200 ${
                        showSequence ? "rotate-90" : ""
                      }`}
                    />
                    <h1 className="font-semibold text-lg">Sequences</h1>
                  </div>

                  {showSequence && (
                    <div className="mt-6 space-y-6">
                      {loading ? (
                        <div className="text-center text-gray-600 font-medium py-10">
                          Loading gene feature data...
                        </div>
                      ) : (
                        <>
                          {geneFeatureInfo && (
                            <div className="overflow-x-auto rounded-lg shadow mb-6">
                              <table className="min-w-full border border-blue-200">
                                <thead>
                                  <tr className="bg-blue-600 text-white text-sm">
                                    <th className="px-4 py-2 border border-blue-200 text-center font-medium">
                                      Transcript ID
                                    </th>
                                    <th className="px-4 py-2 border border-blue-200 text-center font-medium">
                                      Transcript Length
                                    </th>
                                    <th className="px-4 py-2 border border-blue-200 text-center font-medium">
                                      Protein Length
                                    </th>
                                    <th className="px-4 py-2 border border-blue-200 text-center font-medium">
                                      Transcript Type
                                    </th>
                                    <th className="px-4 py-2 border border-blue-200 text-center font-medium">
                                      Genomic Length
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="text-center text-sm text-blue-900">
                                  <tr className="bg-blue-50">
                                    <td className="px-4 py-2 border border-blue-200">
                                      {geneFeatureInfo.transcript_id}
                                    </td>
                                    <td className="px-4 py-2 border border-blue-200">
                                      {geneFeatureInfo.transcript_length}
                                    </td>
                                    <td className="px-4 py-2 border border-blue-200">
                                      {geneFeatureInfo.protein_length}
                                    </td>
                                    <td className="px-4 py-2 border border-blue-200">
                                      {geneFeatureInfo.transcript_type}
                                    </td>
                                    <td className="px-4 py-2 border border-blue-200">
                                      {geneFeatureInfo.genomic_length}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          )}

                          {proteinData && <ProteinSequence protein={proteinData} />}
                          {rnaData && <RnaSequence rna={rnaData} />}
                          {genomeData && <GenomeSequence genome={genomeData} />}
                        </>
                      )}
                    </div>
                  )}
                </section>
              </main>
            </div>
          </>
        ) : (
          <div className="text-gray-600">Loading gene information...</div>
        )}
      </div>
    </div>
  );
};

export default GeneFeaturePage;



