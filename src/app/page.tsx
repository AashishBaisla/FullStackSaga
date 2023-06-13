import styles from "./page.module.css";
import { AboutSection } from "@/components/AboutSection";
import { LandingContent } from "@/components/LandingContent";
import { SkillSection } from "@/components/SkillSection";
import { EducationSection } from "@/components/EducationSection";
import { WorkSection } from "@/components/WorkSection";
import { ExperienceSection } from "@/components/ExperienceSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingContent />

      <AboutSection />

      <SkillSection />

      <EducationSection />

      <WorkSection />

      <ExperienceSection />
    </main>
  );
}
