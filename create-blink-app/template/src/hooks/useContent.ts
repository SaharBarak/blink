"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

// Projects
export function useProjects() {
  return useQuery(api.projects.list, {});
}

export function useProject(id: string) {
  return useQuery(api.projects.getById, { id: id as any });
}

export function useProjectBySlug(slug: string) {
  return useQuery(api.projects.getBySlug, { slug });
}

// Freelance
export function useFreelance() {
  return useQuery(api.freelance.list, {});
}

export function useFreelanceBySlug(slug: string) {
  return useQuery(api.freelance.getBySlug, { slug });
}

// Research
export function useResearch() {
  return useQuery(api.research.list, {});
}

// Contributions
export function useContributions() {
  return useQuery(api.contributions.list, {});
}

// Blog
export function useBlogPosts() {
  return useQuery(api.blog.list, {});
}

export function useBlogPost(slug: string) {
  return useQuery(api.blog.getBySlug, { slug });
}

// Ideas
export function useIdeas() {
  return useQuery(api.ideas.list, {});
}

// Now
export function useNow() {
  return useQuery(api.now.list, {});
}

export function useNowBySection() {
  return useQuery(api.now.bySection, {});
}

// Links
export function useLinks() {
  return useQuery(api.links.list, {});
}

// Availability
export function useAvailability() {
  return useQuery(api.availability.get, {});
}

// About
export function useAbout() {
  return useQuery(api.about.get, {});
}

// Site Copy
export function useSiteCopy() {
  return useQuery(api.siteCopy.getAllSections, {});
}

export function useSiteCopySection(section: string) {
  return useQuery(api.siteCopy.getBySection, { section });
}
