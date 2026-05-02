import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const COVER_COLORS = [
  {bg: '#1a5276', spine: '#154360'},
  {bg: '#145a32', spine: '#0e3b21'},
  {bg: '#6e2f8c', spine: '#4a1f5f'},
  {bg: '#922b21', spine: '#641e16'},
  {bg: '#154360', spine: '#0d2d3f'},
  {bg: '#7d6608', spine: '#544101'},
];

type CourseNavItem = {
  type: string;
  sidebarId: string;
  label: string;
  title?: string;
  level?: number;
};

export default function HomepageFeatures(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const allItems = ((siteConfig.themeConfig as any).navbar?.items ?? []) as any[];
  const dropdown = allItems.find(item => item.type === 'dropdown');
  const courseItems: CourseNavItem[] = (dropdown?.items ?? []).filter(
    (item: any) => item.type === 'docSidebar'
  );

  // Group by level, preserving insertion order of levels
  const levelMap = new Map<number, CourseNavItem[]>();
  for (const item of courseItems) {
    const lvl = item.level ?? 1;
    if (!levelMap.has(lvl)) levelMap.set(lvl, []);
    levelMap.get(lvl)!.push(item);
  }
  const levels = Array.from(levelMap.entries()).sort(([a], [b]) => a - b);

  // Assign colors globally so each book gets a unique color across all levels
  let colorIndex = 0;

  return (
    <section className={styles.courses}>
      <div className="container">
        {levels.map(([level, courses]) => (
          <div key={level} className={styles.levelSection}>
            <Heading as="h2" className={styles.levelTitle}>
              Level {level}
            </Heading>
            <div className={styles.courseGrid}>
              {courses.map((course) => {
                const colors = COVER_COLORS[colorIndex++ % COVER_COLORS.length];
                return (
                  <Link
                    key={course.label}
                    to={`/courses/${course.label.toLowerCase()}`}
                    className={styles.bookCover}
                    style={{
                      '--book-bg': colors.bg,
                      '--book-spine': colors.spine,
                    } as React.CSSProperties}
                  >
                    <div className={styles.bookSpine} />
                    <div className={styles.bookContent}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="rgba(255,255,255,0.7)"
                        className={styles.bookIcon}
                      >
                        <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533z"/>
                        <path d="M12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103z"/>
                      </svg>
                      <span className={styles.courseCode}>{course.label}</span>
                      {course.title && (
                        <span className={styles.courseName}>{course.title}</span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
