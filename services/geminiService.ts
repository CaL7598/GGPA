
import { GoogleGenAI, Type } from "@google/genai";

// Strictly follow the rule: new GoogleGenAI({ apiKey: process.env.API_KEY })
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const queryKnowledgeBase = async (
  userQuery: string, 
  context: { pillar: string, mandate: string },
  fileData?: { data: string, mimeType: string, extractedText?: string }
) => {
  try {
    const parts: any[] = [
      { text: `User Query: ${userQuery}\nTarget Technical Pillar: ${context.pillar}\nGlobal Mandate Context: ${context.mandate}` }
    ];

    if (fileData) {
      if (fileData.extractedText) {
        parts.push({ text: `[CRITICAL CONTEXT] OCR Data from Uploaded Document:\n\n${fileData.extractedText.substring(0, 15000)}` });
      }

      parts.push({
        inlineData: {
          data: fileData.data,
          mimeType: fileData.mimeType,
        },
      });
      
      parts.push({ 
        text: `Perform an institutional diagnostic. Cross-reference with the 30 Volumes of the GGPA Compendium. 
        Focus specifically on the '${context.pillar}' pillar and the '${context.mandate}' mandate. 
        Verify alignment with Act 992 (Ghana) and IPSAS standards.` 
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: { parts },
      config: {
        systemInstruction: `You are the GGPA (Global Governance & Policy Alliance) Deep-Search Assistant. 
        You have access to a 5,000-page technical compendium spanning 30 volumes. 
        Your role is to help diplomats and researchers find specific technical protocols based on:
        - Technical Pillar: ${context.pillar}
        - Global Mandate: ${context.mandate}
        - Reference specific Volumes (I-XXX) when relevant.
        - Maintain a professional, technical tone.
        - Focus on Act 992 (Ghana), UN SDG 16, and the 'Critical Youth Mandate'.
        - Response MUST be valid JSON.`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            relevantVolumes: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            legalBasis: { type: Type.STRING },
            suggestedAction: { type: Type.STRING },
            ocrFindings: { 
              type: Type.STRING,
              description: "Detailed findings from the technical analysis of the document data."
            }
          },
          required: ["summary", "relevantVolumes", "legalBasis"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini Search Error:", error);
    return {
      summary: "An error occurred during synthesis. Please check your configuration.",
      relevantVolumes: ["Error Diagnostics"],
      legalBasis: "Technical Exception",
      suggestedAction: "Verify connectivity and retry."
    };
  }
};
