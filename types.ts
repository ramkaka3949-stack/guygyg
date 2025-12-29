
// Fix: Added React import to provide the React namespace for React.ReactNode type definition
import React from 'react';

export interface Message {
  text: string;
  sender: 'Dhawal' | 'Jaan';
}

export interface JourneyStage {
  title: string;
  description: string;
  icon: React.ReactNode;
}
