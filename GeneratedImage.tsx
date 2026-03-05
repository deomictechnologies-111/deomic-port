import { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface GeneratedImageProps {
  prompt: string;
  className?: string;
  alt: string;
  aspectRatio?: "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
}

export default function GeneratedImage({ prompt, className, alt, aspectRatio = "16:9" }: GeneratedImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function generate() {
      try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
          setError(true);
          setLoading(false);
          return;
        }

        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: `High-quality, professional, modern tech startup style image: ${prompt}. Cinematic lighting, clean composition, minimalist aesthetic.`,
              },
            ],
          },
          config: {
            imageConfig: {
              aspectRatio: aspectRatio,
            },
          },
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            const base64EncodeString = part.inlineData.data;
            setImageUrl(`data:image/png;base64,${base64EncodeString}`);
            setLoading(false);
            return;
          }
        }
        setError(true);
      } catch (err) {
        console.error("Image generation failed:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    generate();
  }, [prompt, aspectRatio]);

  if (loading) {
    return (
      <div className={`bg-slate-100 animate-pulse flex items-center justify-center ${className}`}>
        <div className="text-slate-400 text-sm font-medium">Generating AI Visual...</div>
      </div>
    );
  }

  if (error || !imageUrl) {
    // Fallback to picsum if generation fails or no key
    const seed = prompt.replace(/\s+/g, '-').toLowerCase();
    return (
      <img
        src={`https://picsum.photos/seed/${seed}/1200/800`}
        alt={alt}
        className={className}
        referrerPolicy="no-referrer"
      />
    );
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
    />
  );
}
