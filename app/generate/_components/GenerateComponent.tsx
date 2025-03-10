"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import QuestionnaireContent from "./QuestionnaireContent";
import GeneratedContent from "./GeneratedContent";
import useGenerateContent from "@/hooks/useGeneratedContent";
import { useAccount } from "@useelven/core";

const GenerateComponent: React.FC = () => {
  const { riskSaved: risk, protocolIdSaved: protocolId } = useGenerateContent();
  const { address } = useAccount();

  const timelineData = [
    {
      title: "Fill Questionnaire",
      content: !address ? (
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-4">
          Connect your wallet to see the generated content.
        </p>
      ) : (
        <QuestionnaireContent />
      ),
    },
    {
      title: "Generated Content",
      content: !address ? (
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-4">
          Connect your wallet to see the generated content.
        </p>
      ) : risk && protocolId ? (
        <GeneratedContent risk={risk} protocolId={protocolId} />
      ) : (
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-4">
          You need to fill the questionnaire first.
        </p>
      ),
    },
  ];

  return <Timeline data={timelineData} />;
};

export default GenerateComponent;