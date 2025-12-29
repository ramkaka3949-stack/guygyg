
import React from 'react';
import { BookOpen, GraduationCap, MapPin, Sparkles, Heart, ShieldCheck, Sun } from 'lucide-react';
import { JourneyStage } from './types';

export const QUOTES = {
  STRENGTH: "When you talk about your future, it doesn’t sound like just plans to me—it sounds like strength. It sounds like someone who is brave enough to choose growth, even when the path is difficult.",
  INDEPENDENCE: "The way you think about your parents, about not wanting to depend on anyone, about earning your own place in the world—it shows the depth of your character.",
  SUPPORT: "I don’t want to limit you or tie you down. I don’t want to be a fear in your mind when you think about your dreams. I want to be a quiet strength beside you.",
  PROMISE: "I don’t promise perfection. But I promise honesty, support, and presence. When you’re confused, I’ll help you see things clearly. When you’re tired, I’ll remind you to breathe.",
  HUG: "When I feel not good, I only want to hug you. You are my peace in every storm.",
};

export const NICKNAMES = ["Jaan", "My Love", "My Sweetheart", "My Baby Girl", "My Darling"];

export const STAGES: JourneyStage[] = [
  {
    title: "The Hard Work",
    description: "Late nights of preparation and exams that feel overwhelming. I'll be there with the coffee and the belief.",
    icon: <BookOpen className="w-6 h-6 text-rose-500" />,
  },
  {
    title: "The Recognition",
    description: "Scholarships you work hard for. You deserve every bit of success you're chasing.",
    icon: <GraduationCap className="w-6 h-6 text-rose-500" />,
  },
  {
    title: "The Horizon",
    description: "No matter where your path leads, my care for you is not conditional on distance, timing, or outcomes. I am your safe harbor.",
    icon: <MapPin className="w-6 h-6 text-rose-500" />,
  },
  {
    title: "The Future",
    description: "Seeing you become strong, confident, and fulfilled genuinely matters to me.",
    icon: <Sparkles className="w-6 h-6 text-rose-500" />,
  }
];

export const PROMISES = [
  { text: "Honesty", icon: <ShieldCheck className="w-5 h-5" /> },
  { text: "Support", icon: <Heart className="w-5 h-5" /> },
  { text: "Presence", icon: <Sun className="w-5 h-5" /> },
];
